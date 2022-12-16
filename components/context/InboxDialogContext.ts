import { createContext, Dispatch } from 'react';

export const InboxDialogContext = createContext<{ isInboxDialogOpen: boolean; setInboxDialogOpen: Dispatch<boolean>; }>
    ({
        isInboxDialogOpen: false,
        setInboxDialogOpen: () => void 0,
    });