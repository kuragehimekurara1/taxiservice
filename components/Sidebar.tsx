import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ExpandableItems from './ExpandableItems';
import List from '@mui/material/List';
import SidebarItem from './SidebarItem';
import { AiFillHome } from 'react-icons/ai';
import { BiSupport, BiPaperPlane } from 'react-icons/bi';
import { FaCar, FaMoneyBillAlt } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { LanguageContext } from './context/LanguageContext';
import { MdAddBusiness, MdOutlineEditRoad, MdOutlineGroupAdd, MdPlace } from 'react-icons/md';
import { RiMailAddLine, RiSettings3Fill } from 'react-icons/ri';
import { SidebarContext } from './context/SidebarContext';
import { TbRoad } from 'react-icons/tb';
import { useContext, useEffect, useState } from 'react';
import { BsMailbox } from 'react-icons/bs';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { IoIosPeople } from 'react-icons/io';
import { AllSettingsContext } from './context/AllSettingsContext';
import { Settings } from '../types/settings';
import { getData } from '../lib/axiosRequest';
import { AccountType } from '../types/accountType';

const Sidebar = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;

    const { sidebarOpen } = useContext(SidebarContext);
    const { language } = useContext(LanguageContext);

    const { sidebar, settings } = language;
    const { direction } = settings;

    const { userSettings, setUserSettings } = useContext(AllSettingsContext);

    useEffect(() => {
        if (!userSettings) {
            const getDataAsync = async () => {
                const response = await getData(publicUrl + '/api/settings/getAllSettings');
                if (response && response.status === 200) {
                    setUserSettings(response.data as Settings);
                }
            };
            getDataAsync();
        }
    }, [publicUrl, setUserSettings, userSettings]);

    const breakpoints = createBreakpoints({});
    const appbarHeight = [breakpoints.up('md')] ? '64px' : '56px';


    return (
        <Drawer anchor={direction === 'rtl' ? 'right' : 'left'} variant='persistent'
            PaperProps={{ sx: { overflowY: 'auto', top: appbarHeight, marginTop: 0, height: `calc(100% - ${appbarHeight})` } }}
            open={sidebarOpen}>
            <Box>
                <List dir={direction} sx={{ backgroundColor: 'transparent !important' }} >
                    {userSettings &&
                        <>
                            {userSettings.accountType === AccountType.entrepreneur &&
                                <ExpandableItems label={sidebar.agenciesManagement} isOpen={true} >
                                    <SidebarItem item={{ icon: <MdAddBusiness />, text: sidebar.addNewAgency, url: '/user/agencies?mode=create' }} />
                                    <SidebarItem item={{ icon: <MdOutlineEditRoad />, text: sidebar.editAgency, url: '/user/agencies?mode=edit' }} />
                                    <SidebarItem item={{ icon: <IoIosPeople />, text: sidebar.Subscribers, url: '/subscribers' }} />
                                </ExpandableItems>
                            }
                            {userSettings.accountType >= AccountType.personnel &&
                                <>
                                    <ExpandableItems label={sidebar.personnel} isOpen={true}>
                                        <SidebarItem item={{ icon: <MdOutlineGroupAdd />, text: sidebar.jobRequests, url: '/user/personnel/jobRequests' }} />
                                        <SidebarItem item={{ icon: <HiUserGroup />, text: sidebar.managePersonnel, url: '/user/personnel/management' }} />
                                    </ExpandableItems>
                                    <Divider />
                                </>
                            }
                            <SidebarItem item={{ icon: <MdPlace />, text: sidebar.places, url: '/places' }} />
                            <SidebarItem item={{ icon: <TbRoad />, text: sidebar.trips, url: '/trips' }} />
                            <SidebarItem item={{ icon: <FaMoneyBillAlt />, text: sidebar.payments, url: '/payments' }} />
                            <Divider />
                            <ExpandableItems label={sidebar.messages} isOpen={true} >
                                <SidebarItem item={{ icon: <RiMailAddLine />, text: sidebar.createMessage, url: '/user/messages/create' }} />
                                <SidebarItem item={{ icon: <BsMailbox />, text: sidebar.inbox, url: '/user/messages/inbox' }} />
                                <SidebarItem item={{ icon: <BiPaperPlane />, text: sidebar.sent, url: '/user/messages/sends' }} />
                            </ExpandableItems>
                            <SidebarItem item={{ icon: <RiSettings3Fill />, text: sidebar.settings, url: '/user/settings' }} />
                            <Divider />
                        </>
                    }
                    <SidebarItem item={{ icon: <AiFillHome />, text: sidebar.home, url: '/' }} />
                    <SidebarItem item={{ icon: <FaCar />, text: sidebar.services, url: '/Service' }} />
                    <SidebarItem item={{ icon: <BiSupport />, text: sidebar.support, url: '/Support' }} />
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
