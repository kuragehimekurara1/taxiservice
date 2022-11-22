import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React,{useContext} from 'react';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import { PersonelList } from '../../../types/personel';
import { Button } from '@mui/material';
import CenterBox from '../../controls/CenterBox';
import { LanguageContext } from '../../context/LanguageContext';

const JobRequestTab = (props: { personelList: PersonelList | undefined; }) => {
    const { personelList } = props;

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const { language } = useContext(LanguageContext);
    const { personelManagementPage } = language;

    const theme = useTheme();
    const bgColor = theme.palette.mode === 'dark' ? '#1e1e1ea3' : '#ffffff6e';

    const [checked, setChecked] = React.useState<string[]>([]);
    const handleToggle = (value: string) => () => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    return (
        <CenterBox>
            <List>
                {personelList?.filter((e) => e.isRequest === true).map((personel) =>
                    <ListItem key={personel.id} sx={{ backgroundColor: bgColor, gap: '1rem' }}>
                        <Checkbox onChange={handleToggle(personel.id)} />
                        <ListItemAvatar>
                            <Avatar alt={personel.name} src={profilePictureUrl + personel.profilePicture} sx={{ width: 64, height: 64 }} />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant='body2' component='p' gutterBottom>
                                {personel.name}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                )}
            </List>
            <Button variant="contained" disabled={checked.length<1} color="primary" sx={{ margin: '1rem' }}>{personelManagementPage.acceptRequests}</Button>
        </CenterBox>
    );
};

export default JobRequestTab;