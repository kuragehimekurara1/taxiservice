import React, { useContext, useEffect, useState } from 'react';
import AuthorizedLayout from '../../components/AuthorizedLayout';
import { AccountType } from '../../types/accountType';
import Head from 'next/head';
import Card from '@mui/material/Card';
import { LanguageContext } from '../../components/context/LanguageContext';
import { AgencyDataList } from '../../types/agencies';
import { getData } from '../../lib/axiosRequest';
import Loader from '../../components/controls/Loader';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CenterBox from '../../components/controls/CenterBox';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '../../components/controls/TabPanel';
import Typography from '@mui/material/Typography';
import AddSubscriber from '../../components/pageTabs/subscriberTabs/AddSubscriber';
import { SubscriberContext } from '../../components/context/SubscriberContext';
import { PlacesList } from '../../types/placeType';
import { LocalizationInfoType } from '../../lib/geography';
import { LocalizationInfoContext } from '../../components/context/LocalizationInfoContext';
import { AllSettingsContext } from '../../components/context/AllSettingsContext';
import { SubscriberDataList } from '../../types/subscriberType';
import MySubscribers from '../../components/pageTabs/subscriberTabs/MySubscribers';

const Subscriptions = () => {
    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;

    const { language } = useContext(LanguageContext);
    const { setLocalizationInfo } = useContext(LocalizationInfoContext);
    const { userSettings } = useContext(AllSettingsContext);

    const { settings, subscribersPage } = language;

    const [agencyList, setAgencyList] = useState<AgencyDataList | undefined>(undefined);
    const [placesList, setPlacesList] = useState<PlacesList | undefined>(undefined);
    const [subscriberList, setSubscriberList] = useState<SubscriberDataList | undefined>(undefined);
    const [reload, setReload] = useState(false);
    const [loadingText, setLoadingText] = useState('');
    const [tabID, setTabId] = useState('mySubscribers');
    const [localizationName, setLocalizationName] = useState('');
    useEffect(() => {
        if (!agencyList || reload) {
            const getDataAsync = async () => {
                setLoadingText(subscribersPage.receivingAgencies);
                const response = await getData(publicUrl + '/api/subscribers/retrieve');
                setLoadingText('');
                setReload(false);
                if (response && response.status === 200) {
                    const { agencies, places, subscribers } = response.data;
                    setAgencyList(agencies as AgencyDataList);
                    setPlacesList(places as PlacesList);
                    setSubscriberList(subscribers as SubscriberDataList);
                }
            };
            getDataAsync();
        }
    }, [agencyList, publicUrl, reload, subscribersPage.receivingAgencies]);

    useEffect(() => {
        const getDataAsync = async () => {
            if (localizationName === '') return;
            const data = await import('../../data/localization/' + localizationName + '.json');
            setLocalizationInfo(data as LocalizationInfoType);
        };
        getDataAsync();
    }, [localizationName, setLocalizationInfo]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabId(newValue);
    };

    if (userSettings && localizationName !== userSettings.localization)
        setLocalizationName(userSettings.localization);

    return (
        <>
            <Head>
                <title>{subscribersPage.title}</title>
            </Head>
            <AuthorizedLayout role={AccountType.entrepreneur}>
                <SubscriberContext.Provider
                    value={{
                        agencyList: agencyList, setAgencyList: setAgencyList,
                        placesList: placesList, setPlacesList: setPlacesList,
                        subscriberList: subscriberList, setSubscriberList: setSubscriberList,
                    }}>
                    <Card dir={settings.direction}>
                        {loadingText !== '' ?
                            <Loader text={loadingText} />
                            :

                            <>
                                <CardHeader title={subscribersPage.title} />
                                <CardContent>
                                    <CenterBox>
                                        {!agencyList || agencyList.length === 0 ?
                                            <Typography variant='body2' >{subscribersPage.noAgencies}</Typography>
                                            :
                                            <>
                                                <Tabs value={tabID} onChange={handleChange} aria-label='subscriber tabs'>
                                                    <Tab value='mySubscribers' label={subscribersPage.mySubscribers} />
                                                    <Tab value='addSubscriber' label={subscribersPage.addSubscriber} />
                                                    <Tab value='editSubscriber' label={subscribersPage.editSubscriber} />
                                                </Tabs>
                                                <TabPanel activeIndex={tabID} index='mySubscribers'>
                                                    <MySubscribers />
                                                </TabPanel>
                                                <TabPanel activeIndex={tabID} index='addSubscriber'>
                                                    <AddSubscriber />
                                                </TabPanel>
                                                <TabPanel activeIndex={tabID} index='editSubscriber'>
                                                </TabPanel>
                                            </>
                                        }
                                    </CenterBox>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'end' }}>
                                    <Button variant='contained' onClick={() => setReload(true)}>{subscribersPage.reload}</Button>
                                </CardActions>
                            </>

                        }

                    </Card>
                </SubscriberContext.Provider>
            </AuthorizedLayout>
        </>
    );
};

export default Subscriptions;