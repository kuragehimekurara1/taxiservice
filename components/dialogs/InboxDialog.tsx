import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import { MessageData } from '../../types/messages';
import { InboxDialogContext } from '../context/InboxDialogContext';
import Avatar from '@mui/material/Avatar';
import CenterBox from '../controls/CenterBox';
import { postData } from '../../lib/axiosRequest';
import Alert from '@mui/material/Alert';
import Loader from '../controls/Loader';
import moment from 'moment';

const InboxDialog = (props: { message: MessageData | undefined; onMessageStatusChanged: (isRead: boolean) => void; }) => {

    const message = props.message;
    const { language } = useContext(LanguageContext);
    const { isInboxDialogOpen, setInboxDialogOpen } = useContext(InboxDialogContext);

    const [showWarning, setShowWarning] = useState(false);
    const [reload, setReload] = useState(true);

    const { settings, inboxDialog } = language;
    const { direction } = settings;

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const handleClose = () => {
        setInboxDialogOpen(false);
    };
    useEffect(() => {
        if (message && reload && !message.isRead) {
            const markAsRead = async () => {
                const response = await postData(publicUrl + '/api/messages/read', { messageIds: message.id });
                setReload(false);
                if (response && response.status === 200) {
                    setShowWarning(false);
                    props.onMessageStatusChanged(true);
                }
                else
                    setShowWarning(true);
            };
            markAsRead();
        }
    }, [message, props, publicUrl, reload]);

    if (message === undefined || !isInboxDialogOpen) return <></>;

    return (
        <Dialog
            open={isInboxDialogOpen}
            onClose={handleClose}
            aria-labelledby='inbox-dialog-title'
            aria-describedby='inbox-dialog-description'
            dir={direction}
        >
            <DialogTitle id='inbox-dialog-title'>
                {message.title}
            </DialogTitle>
            <DialogContent >
                <CenterBox>
                    <Avatar src={profilePictureUrl + message.senderProfilePicture} sx={{ width: 84, height: 84 }} alt='profile picture' />
                    <Typography variant='subtitle1' component='p'>{moment(message.date).format('MM/DD/YYYY HH:mm:ss')}</Typography>
                    <Typography variant='subtitle1' component='p'>{message.message}</Typography>
                    {showWarning &&
                        <>
                            {reload ?
                                <Loader text={inboxDialog.markingMessageAsRead} />
                                :
                                <>
                                    <Alert severity='error'>{inboxDialog.errorMarkAsRead}</Alert>
                                    <Button onClick={() => setReload(true)} >{inboxDialog.retry}</Button>
                                </>
                            }

                        </>
                    }
                </CenterBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>{inboxDialog.ok}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default InboxDialog;

