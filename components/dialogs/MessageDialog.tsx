import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import { MessageData } from '../../types/messages';
import { MessageDialogContext } from '../context/MessageDialogContext';
import Avatar from '@mui/material/Avatar';
import CenterBox from '../controls/CenterBox';
import { postData } from '../../lib/axiosRequest';
import Alert from '@mui/material/Alert';
import Loader from '../controls/Loader';
import { customCalender } from '../../lib/dateFormat';

const MessageDialog = (props: { message: MessageData | undefined; onMessageStatusChanged: (isRead: boolean) => void; }) => {

    const message = props.message;
    const { language } = useContext(LanguageContext);
    const { isMessageDialogOpen, setMessageDialogOpen } = useContext(MessageDialogContext);

    const [showWarning, setShowWarning] = useState(false);
    const [reload, setReload] = useState(true);

    const { settings, messageDialog } = language;
    const { direction } = settings;

    const publicUrl = process.env.NEXT_PUBLIC_WEB_URL;
    const profilePictureUrl = publicUrl + '/images/profiles/';

    const handleClose = () => {
        setMessageDialogOpen(false);
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

    if (message === undefined || !isMessageDialogOpen) return <></>;

    return (
        <Dialog
            open={isMessageDialogOpen}
            onClose={handleClose}
            aria-labelledby='message-dialog-title'
            aria-describedby='message-dialog-description'
            dir={direction}
        >
            <DialogTitle id='message-dialog-title'>
                {message.title}
            </DialogTitle>
            <DialogContent >
                <CenterBox>
                    <Avatar src={profilePictureUrl + message.senderProfilePicture} sx={{ width: 84, height: 84 }} alt='profile picture' />
                    <Typography variant='subtitle1' sx={{ direction: 'ltr' }} component='p'>
                        {`${messageDialog.receiveDate} : ${customCalender(message.date, settings.code)}`}
                    </Typography>
                    <Typography variant='subtitle1' component='p'>{message.message}</Typography>
                    {showWarning &&
                        <>
                            {reload ?
                                <Loader text={messageDialog.markingMessageAsRead} />
                                :
                                <>
                                    <Alert severity='error'>{messageDialog.errorMarkAsRead}</Alert>
                                    <Button onClick={() => setReload(true)} >{messageDialog.retry}</Button>
                                </>
                            }

                        </>
                    }
                </CenterBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>{messageDialog.ok}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MessageDialog;

