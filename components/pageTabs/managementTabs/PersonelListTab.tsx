import Avatar from '@mui/material/Avatar';
import CenterBox from '../../controls/CenterBox';
import Loader from '../../controls/Loader';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { LanguageContext } from '../../context/LanguageContext';
import { PersonelContext } from '../../context/PersonelContext';
import { ToastContext } from '../../context/ToastContext';
import { getResponseError } from '../../../lib/language';
import { postData } from '../../../lib/axiosRequest';
import { ReactNode, useContext, useState } from 'react';
import AutoCompletePlus, { TaggedItem } from '../../controls/AutoCompletePlus';

const PersonelListTab = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const { language } = useContext(LanguageContext);
    const { setToast } = useContext(ToastContext);
    const { personelList, setPersonelList } = useContext(PersonelContext);
    const { personelManagementPage, notification, settings } = language;
    const [loadingText, setLoadingText] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<string>('0');
    const items = personelList?.filter((e) => e.isRequest === false);
    const taggedItems = items?.map((e) => {
        return {
            displayText: e.name,
            tag: e.id,
            avatar:profilePictureUrl + e.profilePicture
        };
    });

    return (
        <>
            {loadingText !== '' ?
                <Loader text={loadingText} />
                :
                <CenterBox dir={settings.direction}>
                    <AutoCompletePlus items={taggedItems} label={personelManagementPage.personelList} />
                </CenterBox>
            }
        </>
    );
};

export default PersonelListTab;