// import Button from '@mui/material/Button';
// import { ToastContext } from '../../../components/context/ToastContext';
import AuthorizedLayout from '../../../components/AuthorizedLayout';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CenterBox from '../../../components/controls/CenterBox';
import Head from 'next/head';
import JobRequestTab from '../../../components/pageTabs/managementTabs/JobRequestTab';
import Loader from '../../../components/controls/Loader';
import Paper from '@mui/material/Paper';
import PersonelListTab from '../../../components/pageTabs/managementTabs/PersonelListTab';
import React, { useContext, useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabPanel from '../../../components/controls/TabPanel';
import Tabs from '@mui/material/Tabs';
import type { NextPage } from 'next';
import { LanguageContext } from '../../../components/context/LanguageContext';
import { PersonelList } from '../../../types/personel';
import { getData } from '../../../lib/axiosRequest';


const Management: NextPage = () => {
    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    // const { setToast } = useContext(ToastContext);
    const { language } = useContext(LanguageContext);
    const [personelList, setPersonelList] = useState<PersonelList | undefined>(undefined);
    const [reload, setReload] = useState(false);

    const { personelManagementPage, settings } = language;
    const [loadingText, setLoadingText] = useState(personelManagementPage.receivingPersonnel);
    const [tabID, setTabId] = useState('personel');


    useEffect(() => {
        if (!personelList || reload) {
            const getDataAsync = async () => {
                setLoadingText(personelManagementPage.receivingPersonnel);
                const response = await getData(publicUrl + '/api/personel/retrieve');
                setLoadingText('');
                setReload(false);
                if (response && response.status === 200) {
                    setPersonelList(response.data as PersonelList);
                }
            };
            getDataAsync();
        }
    }, [personelList, personelManagementPage.receivingPersonnel, publicUrl, reload]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabId(newValue);
    };

    return (
        <AuthorizedLayout>
            <>
                <Head>
                    <title>{personelManagementPage.title}</title>
                </Head>
                {loadingText !== '' ?
                    <Paper>
                        <Loader text={loadingText} />
                    </Paper>
                    :

                    <CenterBox dir={settings.direction}>
                        <Card>
                            <CardHeader title={personelManagementPage.title} />
                            <CardContent>
                                <Tabs onChange={handleTabChange} value={tabID} aria-label='request tabs'>
                                    <Tab value='personel' label={personelManagementPage.personelList} />
                                    <Tab value='request' label={personelManagementPage.jobRequests} />
                                </Tabs>
                                <TabPanel activeIndex={tabID} index='personel'>
                                    <PersonelListTab personelList={personelList} />
                                </TabPanel>
                                <TabPanel activeIndex={tabID} index='request'>
                                    <JobRequestTab personelList={personelList} />
                                </TabPanel>
                                <CardActions>
                                    <Button variant='contained' color='primary' onClick={() => setReload(true)}>
                                        {personelManagementPage.reload}
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </CenterBox>

                }
            </>
        </AuthorizedLayout>
    );
};

export default Management;