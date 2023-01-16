import AuthorizedLayout from '../../../components/AuthorizedLayout';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CenterBox from '../../../components/controls/CenterBox';
import Head from 'next/head';
import Link from '@mui/material/Link';
import Loader from '../../../components/controls/Loader';
import React, { useContext, useEffect, useState } from 'react';
import SettingFetcher from '../../../components/controls/SettingFetcher';
import TabPanel from '../../../components/controls/TabPanel';
import { AccountType } from '../../../types/accountType';
import { AgencyData, AgencyDataList } from '../../../types/agencies';
import { AllSettingsContext } from '../../../components/context/AllSettingsContext';
import { getData } from '../../../lib/axiosRequest';
import { LanguageContext } from '../../../components/context/LanguageContext';
import { LocalizationInfoContext } from '../../../components/context/LocalizationInfoContext';
import { LocalizationInfoType } from '../../../lib/geography';
import { TripContext } from '../../../components/context/TripContext';
// eslint-disable-next-line no-duplicate-imports
import type { NextPage } from 'next';
import SelectAgency from '../../../components/pageTabs/addTripTabs/SelectAgency';
import SelectDestination from '../../../components/pageTabs/addTripTabs/SelectDestination';
import { ToastContext } from '../../../components/context/ToastContext';
import SelectOrigin from '../../../components/pageTabs/addTripTabs/SelectOrigin';
import { PlacesList } from '../../../types/placeType';

const RequestTrip: NextPage = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;

    const { language } = useContext(LanguageContext);
    const { userSettings } = useContext(AllSettingsContext);
    const { setLocalizationInfo } = useContext(LocalizationInfoContext);
    const { setToast } = useContext(ToastContext);
    const { settings, tripCreationPage, notification } = language;
    const [tabID, setTabId] = useState('0');
    const [reload, setReload] = useState(false);
    const [loadingText, setLoadingText] = useState('');
    const [places, setPlaces] = useState<PlacesList | undefined>(undefined);
    const [originAddress, setOriginAddress] = useState<string>('');
    const [originLocation, setOriginLocation] = useState<number[] | null>(null);
    const [localizationName, setLocalizationName] = useState('');
    const [agencies, setAgencies] = useState<AgencyDataList | undefined>(undefined);
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAgency, setSelectedAgency] = useState<AgencyData | null>(null);

    useEffect(() => {
        if (!agencies || reload) {
            const getDataAsync = async () => {
                setLoadingText(tripCreationPage.receivingData);
                const response = await getData(publicUrl + '/api/trips/getData');
                setLoadingText('');
                setReload(false);
                if (response && response.status === 200) {
                    const { agencies, places } = response.data;
                    setAgencies(agencies as AgencyDataList);
                    setPlaces(places as PlacesList);
                }
            };
            getDataAsync();
        }
    }, [agencies, publicUrl, reload, tripCreationPage.receivingData]);

    if (userSettings && localizationName !== userSettings.localization)
        setLocalizationName(userSettings.localization);


    useEffect(() => {
        const getDataAsync = async () => {
            if (localizationName === '') return;
            const data = await import('../../../data/localization/' + localizationName + '.json');
            setLocalizationInfo(data as LocalizationInfoType);
        };
        getDataAsync();
    }, [localizationName, setLocalizationInfo]);


    const BreadcrumbsSteps = () => {
        const stepsLabel = [tripCreationPage.selectAgency, tripCreationPage.selectOrigin, tripCreationPage.selectDestination].slice(0, currentStep + 1);

        return (
            <Breadcrumbs separator='›' aria-label='agency-breadcrumb'>
                {stepsLabel.map((label, index) => {
                    return (
                        <Link key={index} onClick={() => gotoStep(index)} color='text.primary'>
                            {label}
                        </Link>
                    );
                }
                )}
            </Breadcrumbs>
        );
    };
    const gotoStep = (step: number) => {
        setCurrentStep(step);
        setTabId(step.toString());
    };
    const nextStep = () => {
        if (!selectedAgency) {
            setToast({ id: Math.random(), message: notification.selectAgency, alertColor: 'error' });
            return;
        }
        if (currentStep === 1 && (!originLocation || originAddress.length === 0)) {
            setToast({ id: Math.random(), message: notification.addressAndLocationRequired, alertColor: 'error' });
            return;
        }
        gotoStep(currentStep + 1);
        setTabId((currentStep + 1).toString());
    };
    const handleOriginAddressChange = (location: number[], address: string) => {
        setOriginLocation(location);
        setOriginAddress(address);
    };

    return (
        <>
            <Head>
                <title>{tripCreationPage.title}</title>
            </Head>
            <AuthorizedLayout role={AccountType.customer}>
                <TripContext.Provider value={{ agencies, places, setAgencies, setPlaces }}>
                    <Card dir={settings.direction}>
                        {!userSettings ?
                            <SettingFetcher />
                            :
                            loadingText ?
                                <Loader text={loadingText} />
                                :
                                <>
                                    <CardHeader title={tripCreationPage.title} />
                                    <CardContent>
                                        <CenterBox>
                                            <BreadcrumbsSteps />
                                            <TabPanel activeIndex={tabID} index={'0'} >
                                                <SelectAgency onValuesChange={(agency) => setSelectedAgency(agency)} />
                                            </TabPanel>
                                            <TabPanel activeIndex={tabID} index={'1'} >
                                                {selectedAgency &&
                                                    <SelectOrigin onAddressChanged={handleOriginAddressChange} agencyLocation={[selectedAgency.latitude, selectedAgency.longitude]} />
                                                }
                                            </TabPanel>
                                            <TabPanel activeIndex={tabID} index={'2'} >
                                                <SelectDestination />
                                            </TabPanel>
                                        </CenterBox>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: 'end', gap: '1rem' }}>
                                        <Button variant='contained' onClick={() => setReload(true)}>{tripCreationPage.reload}</Button>
                                        <Button variant='contained' onClick={() => nextStep()} >{tripCreationPage.nextStep}</Button>

                                    </CardActions>
                                </>
                        }
                    </Card>
                </TripContext.Provider>
            </AuthorizedLayout>
        </>
    );
};



export default RequestTrip;