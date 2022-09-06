import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import memoryCache, { CacheClass } from 'memory-cache';
import prismaClient from '../../../lib/prismaClient';
import { Prisma } from '@prisma/client';

export const memCache: CacheClass<string, string> = new memoryCache.Cache();

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getSession({ req });
    if (req.method !== 'POST')
        return res.status(405).json({ message: 'ERR_INVALID_METHOD' });

    if (!session?.user?.email)
        return res.status(401).json({ error: 'ERR_UNAUTHORIZED' });

    let { agencyName } = <{ agencyName: string; }>req.body;
    const { isEnable } = <{ isEnable: boolean; }>req.body;
    let { phoneNumber1, phoneNumber2, mobileNumber } = <{ phoneNumber1: string, phoneNumber2: string, mobileNumber: string; }>req.body;
    let { address } = <{ address: string; }>req.body;
    const { latitude, longitude } = <{ latitude: number; longitude: number; }>req.body;
    const { workingDays, startOfWorkingHours, endOfWorkingHours } = <{ workingDays: number, startOfWorkingHours: Date, endOfWorkingHours: Date; }>req.body;

    const isValid = !ArrayHasNullOrEmptyItem([agencyName, isEnable, phoneNumber1, phoneNumber2, mobileNumber, address, latitude, longitude, workingDays, startOfWorkingHours, endOfWorkingHours]);
    if (!isValid)
        return res.status(400).json({ error: 'ERR_INVALID_REQUEST' });

    const email = session.user.email;
    const cacheTime = 1000 * 60;
    const value = memCache.get(email);

    const maxAgencyLength = 50;
    const maxPhoneNumberLength = 30;
    const maxAddressLength = 300;

    agencyName = agencyName.trim().substring(0, maxAgencyLength);
    phoneNumber1 = phoneNumber1.trim().substring(0, maxPhoneNumberLength);
    phoneNumber2 = phoneNumber2.trim().substring(0, maxPhoneNumberLength);
    mobileNumber = mobileNumber.trim().substring(0, maxPhoneNumberLength);
    address = address.trim().substring(0, maxAddressLength);

    if (value !== null)
        return res.status(429).json({ error: 'ERR_TOO_MANY_REQUESTS' });
    try {
        const prisma = prismaClient;

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user)
            return res.status(404).json({ error: 'ERR_USER_NOT_FOUND' });

        const agency = await prisma.agency.create({
            data: {
                agencyName: agencyName,
                isEnable: isEnable,
                phoneNumber1: phoneNumber1,
                phoneNumber2: phoneNumber2,
                mobileNumber: mobileNumber,
                address: address,
                latitude: latitude,
                longitude: longitude,
                workingDays: workingDays,
                startOfWorkingHours: startOfWorkingHours,
                endOfWorkingHours: endOfWorkingHours,
                createdAt: new Date(),
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
        if (agency) {
            memCache.put(email, 'true', cacheTime);
            return res.status(200).json({ message: 'OK' });
        }
        else
            return res.status(503).json({ error: 'ERR_UNKNOWN' });

    }
    catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002')
                return res.status(409).json({ error: 'ERR_DUPLICATE' });
        }
        return res.status(500).json({ error: 'ERR_UNKNOWN' });
    }
};

const ArrayHasNullOrEmptyItem = (arr: unknown[]) => {
    return arr.some((item) => item === null || item === undefined || item==='');
};

export default Handler;