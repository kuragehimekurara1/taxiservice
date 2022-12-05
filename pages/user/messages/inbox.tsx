import AuthorizedLayout from '../../../components/AuthorizedLayout';
import CenterBox from '../../../components/controls/CenterBox';
import Head from 'next/head';
import Loader from '../../../components/controls/Loader';
import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { LanguageContext } from '../../../components/context/LanguageContext';
import { ToastContext } from '../../../components/context/ToastContext';
import { getData } from '../../../lib/axiosRequest';
import useSWR from 'swr';
import { MessageDataList } from '../../../types/messages';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
const fetcher = async (url: string) => {
    const data = await getData(url);
    if (!data)
        return undefined;
    if (data.status !== 200)
        throw new Error(data.statusText);
    return data.data;
};

const Inbox: NextPage = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;

    const { language } = useContext(LanguageContext);
    const { setToast } = useContext(ToastContext);

    const [loadingText, setLoadingText] = useState<string>('');
    const [messages, setMessages] = useState<MessageDataList | undefined>(undefined);

    const { inboxPage, settings, notification } = language;
    const { data } = useSWR(process.env.NEXT_PUBLIC_WEB_URL + '/api/messages/retrieve', fetcher);
    useEffect(() => {
        if (data)
            setMessages(data as MessageDataList);
    }, [data]);
    console.log('Fetched inbox from SWR',data);

    return (
        <AuthorizedLayout>
            <>
                <Head>
                    <title>{inboxPage.title}</title>
                </Head>
                <Card>
                    <CardHeader title={inboxPage.title} />
                    <CardContent>
                        <CenterBox dir={settings.direction}>
                            {loadingText !== '' ?
                                <Loader text={loadingText} />
                                :
                                <>
                                    {messages?.map((message, index) =>
                                        <Typography key={index} variant="body1">
                                            {message.title}
                                        </Typography>
                                    )}
                                </>
                            }

                        </CenterBox>
                    </CardContent>
                </Card>

            </>
        </AuthorizedLayout>
    );
};

export default Inbox;