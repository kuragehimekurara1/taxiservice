import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ExpandableItems from './ExpandableItems';
import List from '@mui/material/List';
import SidebarItem from './SidebarItem';
import { AiFillHome } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { FaCar, FaMoneyBillAlt } from 'react-icons/fa';
import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { LanguageContext } from './context/LanguageContext';
import { MdAddBusiness, MdOutlineEditRoad, MdOutlineGroupAdd } from 'react-icons/md';
import { RiSettings3Fill } from 'react-icons/ri';
import { SidebarContext } from './context/SidebarContext';
import { TbRoad } from 'react-icons/tb';
import { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
const Sidebar = () => {

    const { sidebarOpen } = useContext(SidebarContext);
    const { language } = useContext(LanguageContext);

    const { sidebar, settings } = language;
    const { direction } = settings;

    const session = useSession();
    const [isUserValid, setUserValid] = useState(false);
    useEffect(() => {
        if (session.data)
            setUserValid(true);
        else
            setUserValid(false);
    }, [session]);

    return (
        <Drawer anchor={direction === 'rtl' ? 'right' : 'left'} variant='persistent' open={sidebarOpen}>
            <Box>
                <List dir={direction} >
                    {isUserValid &&
                        <>
                            <ExpandableItems label={sidebar.agenciesManagement} isOpen={true} >
                                <SidebarItem item={{ icon: <MdAddBusiness />, text: sidebar.addNewAgency, url: '/user/agencies?mode=create' }} />
                                <SidebarItem item={{ icon: <MdOutlineEditRoad />, text: sidebar.editAgency, url: '/user/agencies?mode=edit' }} />
                            </ExpandableItems>
                            <ExpandableItems label={sidebar.personnel} isOpen={true} >
                            <SidebarItem item={{ icon: <MdOutlineGroupAdd />, text: sidebar.jobRequests, url: '/user/personnel/jobRequests' }} />
                            <SidebarItem item={{ icon: <HiUserGroup />, text: sidebar.managePersonnel, url: '/user/personnel/management' }} />
                            </ExpandableItems>
                            <Divider />
                            <SidebarItem item={{ icon: <TbRoad />, text: sidebar.trips, url: '/trips' }} />
                            <SidebarItem item={{ icon: <FaMoneyBillAlt />, text: sidebar.payments, url: '/payments' }} />
                            <Divider />
                            <SidebarItem item={{ icon: <HiOutlineMail />, text: sidebar.messages, url: '/messages' }} />
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
