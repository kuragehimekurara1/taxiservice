import AutoCompletePlus from '../../controls/AutoCompletePlus';
import React from 'react';
import Typography from '@mui/material/Typography';
import { PersonelList as PersonelListTab } from '../../../types/personel';

const PersonelListTab = (props: { personelList: PersonelListTab | undefined; }) => {
    const { personelList } = props;
    const items = personelList?.filter((e) => e.isRequest === false).map((item) => { return { displayText: item.name, tag: item.id }; });

    return (
        <Typography variant='h5' component='h1' gutterBottom>
            <AutoCompletePlus items={items} label={''} />
        </Typography>
    );
};

export default PersonelListTab;