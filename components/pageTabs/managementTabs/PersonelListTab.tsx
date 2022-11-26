import Alert from '@mui/material/Alert';
import AutoCompletePlus from '../../controls/AutoCompletePlus';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CenterBox from '../../controls/CenterBox';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Loader from '../../controls/Loader';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import { LanguageContext } from '../../context/LanguageContext';
import { PersonelContext } from '../../context/PersonelContext';
import { ToastContext } from '../../context/ToastContext';
import { getResponseError } from '../../../lib/language';
import { postData } from '../../../lib/axiosRequest';
import { useContext, useState } from 'react';

const PersonelListTab = () => {

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const { language } = useContext(LanguageContext);
    const { setToast } = useContext(ToastContext);
    const { personelList, setPersonelList } = useContext(PersonelContext);
    const { personelManagementPage, notification, settings } = language;
    const [loadingText, setLoadingText] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<string>('0');
    const personel = personelList?.filter((e) => e.isRequest === false);
    const taggedItems = personel?.map((e) => {
        return {
            displayText: e.name,
            tag: e.id,
            avatar: profilePictureUrl + e.profilePicture
        };
    });
    const activeItem = personel?.find((e) => e.id === selectedItem);

    const theme = useTheme();
    const bgColor = theme.palette.mode === 'dark' ? '#1e1e1ea3' : '#ffffff6e';

    const CheckedListItem = (props: { label: string; }) => {
        const { label } = props;
        return (
            <ListItem sx={{ backgroundColor: bgColor, gap: '1rem' }}>
                <Checkbox />
                <ListItemText>
                    <Typography variant='body2' component='p' sx={{ textAlign: 'start' }} gutterBottom>
                        {label}
                    </Typography>
                </ListItemText>
            </ListItem>
        );
    };
    const updateRequests = async () => {

        setLoadingText(personelManagementPage.acceptingRequests);
        const response = await postData('/api/personel/updatePermissions', { ids: [] });
        setLoadingText('');
        if (!response) {
            setToast({ id: Math.random(), message: getResponseError('ERR_NULL_RESPONSE'), alertColor: 'error' });
            return;
        }
        if (response.status === 200) {
            const data = response.data as { ids: string[]; };
            if (data.ids.length > 0) {
                const newPersonelList = personelList?.map(personel => {
                    if (data.ids.includes(personel.id)) {
                        personel.isRequest = false;
                    }
                    return personel;
                });
                setPersonelList(newPersonelList);
            }
            setToast({ id: Math.random(), message: notification.successfullyAcceptPersonnel, alertColor: 'success' });
        }
        else {
            const data = response.data as { message: string; };
            if (response.status >= 400 && response.status < 500)
                setToast({ id: Math.random(), message: getResponseError('HTML_ERROR_404', language), alertColor: 'error' });
            else
                setToast({ id: Math.random(), message: getResponseError(data.message, language), alertColor: 'error' });
        }

    };
    return (
        <>
            {loadingText !== '' ?
                <Loader text={loadingText} />
                :
                <CenterBox dir={settings.direction}>
                    <AutoCompletePlus items={taggedItems} label={personelManagementPage.personelList}
                        onChanged={(e) => setSelectedItem(e?.tag || '0')} />
                    {activeItem !== undefined ?
                        <CenterBox>
                            <Avatar src={profilePictureUrl + activeItem.profilePicture} sx={{ width: 84, height: 84 }} />
                            <TextField label={personelManagementPage.jobPosition} defaultValue={activeItem.position} required />
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                {personelManagementPage.workplace + ':' + activeItem.agencyName}
                            </Typography>
                            <List dir={settings.direction}>
                                <CheckedListItem label={personelManagementPage.managementPermission} />
                                <CheckedListItem label={personelManagementPage.drivingPermission} />
                                <CheckedListItem label={personelManagementPage.reportingPermission} />
                                <CheckedListItem label={personelManagementPage.acceptRequestsPermission} />
                                <CheckedListItem label={personelManagementPage.activityPermission} />
                            </List>
                            <Alert severity='warning'>
                                {personelManagementPage.activityWarning}
                            </Alert>
                            <Button variant='contained' onClick={updateRequests} color='primary' sx={{ margin: '1rem' }}>
                                {personelManagementPage.updatePermissions}
                            </Button>
                        </CenterBox>
                        :
                        <Typography variant='body2' sx={{ mt: 2, mb: 2 }}>{personelManagementPage.noPersonelSelected}</Typography>
                    }
                </CenterBox>
            }
        </>
    );
};

export default PersonelListTab;