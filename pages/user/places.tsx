import AuthorizedLayout from '../../components/AuthorizedLayout';
import Head from 'next/head';
import { LanguageContext } from '../../components/context/LanguageContext';
import React, { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line no-duplicate-imports
import type { NextPage } from 'next';
import { AccountType } from '../../types/accountType';
import CenterBox from '../../components/controls/CenterBox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import TabPanel from '../../components/controls/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MyPlaces from '../../components/pageTabs/placesTabs/MyPlaces';
import AddPlace from '../../components/pageTabs/placesTabs/AddPlace';


const Places: NextPage = () => {

    const { language } = useContext(LanguageContext);
    const { settings, placePage } = language;

    const [tabID, setTabId] = useState('myPlaces');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabId(newValue);
    };

    return (
        <>
            <Head>
                <title>{placePage.title}</title>
            </Head>
            <AuthorizedLayout role={AccountType.customer}>
                <Card dir={settings.direction}>
                    <CardHeader title={placePage.title} />
                    <CardContent>
                        <CenterBox>
                            <Tabs value={tabID} onChange={handleChange} aria-label='places tabs'>
                                <Tab value='myPlaces' label={placePage.myPlaces} />
                                <Tab value='addPlace' label={placePage.addPlace} />
                                <Tab value='editPlace' label={placePage.editPlace} />
                            </Tabs>
                            <TabPanel activeIndex={tabID} index='myPlaces'>
                                <MyPlaces />
                            </TabPanel>
                            <TabPanel activeIndex={tabID} index='addPlace'>
                                <AddPlace />
                            </TabPanel>
                        </CenterBox>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </AuthorizedLayout>
        </>
    );
};



export default Places;