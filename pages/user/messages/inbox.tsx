import AuthorizedLayout from '../../../components/AuthorizedLayout';
import CenterBox from '../../../components/controls/CenterBox';
import Head from 'next/head';
import Loader from '../../../components/controls/Loader';
import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { LanguageContext } from '../../../components/context/LanguageContext';
import { getData } from '../../../lib/axiosRequest';
import { MessageDataList } from '../../../types/messages';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { IoCheckmark, IoCheckmarkDone } from 'react-icons/io5';
import moment from 'moment';
import { SxProps, Theme } from '@mui/material';

const Inbox: NextPage = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const { language } = useContext(LanguageContext);

    const [messages, setMessages] = useState<MessageDataList | undefined>(undefined);
    const [reload, setReload] = useState(false);

    const { inboxPage, settings, components } = language;
    const { dataGrid } = components;

    const [loadingText, setLoadingText] = useState<string>('');

    const columns: GridColDef[] = [
        {
            field: 'profilePicture',
            headerName: '',
            sortable: false,
            renderCell: (params: GridRenderCellParams<string>) =>
                <>
                    <Avatar src={profilePictureUrl + params.value || ''} sx={{ width: 48, height: 48 }} alt='profile picture' />
                </>
            ,
        },
        { field: 'sender', headerName: inboxPage.sender, sortable: true },
        {
            field: 'isRead',
            headerName: inboxPage.viewed,
            sortable: true,
            renderCell: (params: GridRenderCellParams<boolean>) =>
                <>
                    {params.value ?
                        <>
                            <IoCheckmarkDone style={{ margin: '1rem' }} />
                            {inboxPage.yes}
                        </>
                        :
                        <>
                            <IoCheckmark style={{ margin: '1rem' }} />
                            {inboxPage.no}

                        </>
                    }
                </>
            ,
        },
        { field: 'title', headerName: inboxPage.messageTitle, sortable: true },
        {
            field: 'date',
            headerName: inboxPage.date,
            sortable: true,
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams<Date>) =>
                <>
                    {params.value ?
                        <>
                            {moment(params.value).fromNow()}
                        </>
                        :
                        <>


                        </>
                    }
                </>
            ,
        },

    ];
    useEffect(() => {
        if (!messages || reload) {
            const getDataAsync = async () => {
                setLoadingText(inboxPage.receivingMessages);
                const response = await getData(publicUrl + '/api/messages/retrieve');
                setLoadingText('');
                setReload(false);
                if (response && response.status === 200) {
                    setMessages(response.data as MessageDataList);
                }
            };
            getDataAsync();
        }
    }, [inboxPage.receivingMessages, messages, publicUrl, reload]);
    const rows = messages?.map((message) => {
        return {
            id: message.id,
            sender: message.sender,
            title: message.title,
            date: message.date,
            profilePicture: message.senderProfilePicture,
            message: message.message,
            isRead: message.isRead,
        };
    });
    const rowsWithLabel = JSON.parse(JSON.stringify(rows || []));
    const fixDataGridViewRtlBug = () => {
        if (settings.direction === 'ltr')
            return {} as SxProps<Theme>;
        else
            return {
                '& .MuiDataGrid-columnHeaders': {
                    transform: 'rotateY(180deg)'
                },
                '& .MuiDataGrid-cell': {
                    transform: 'rotateY(180deg)',
                    direction: 'rtl'

                },
                '& .MuiDataGrid-columnHeaderTitleContainer': {
                    transform: 'rotateY(180deg)',
                    direction: 'rtl'

                },
                '& .MuiDataGrid-virtualScroller': {
                    transform: 'rotateY(180deg)'
                },
                '& .MuiDataGrid-footerContainer': {
                    direction:'rtl'
                }

            } as SxProps<Theme>;
    };

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
                                    {messages ?
                                        <Box dir='ltr' sx={{ height: 400, width: 'min(90vw, 100ch)', minWidth: 'min(90vw, 100ch)' }}>
                                            <DataGrid
                                                rows={rowsWithLabel}
                                                columns={columns}
                                                pageSize={10}
                                                rowsPerPageOptions={[10]}
                                                checkboxSelection
                                                disableSelectionOnClick
                                                disableColumnMenu
                                                sx={fixDataGridViewRtlBug()}
                                                localeText={{
                                                    noRowsLabel: dataGrid.noData,
                                                    footerRowSelected: (count: number) => `${count} ${count > 1 ? dataGrid.rowsSelected : dataGrid.rowSelected}`,
                                                    footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} ${dataGrid.of} ${totalCount.toLocaleString()}`,
                                                }}
                                            />
                                        </Box>
                                        :
                                        <Typography variant="body2">
                                            {inboxPage.noMessages}
                                        </Typography>
                                    }
                                </>

                            }
                        </CenterBox>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color='primary' onClick={() => setReload(true)} >
                            {inboxPage.reload}
                        </Button>
                    </CardActions>
                </Card>

            </>
        </AuthorizedLayout >
    );
};

export default Inbox;