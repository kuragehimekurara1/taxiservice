import dynamic from 'next/dynamic';
import React from 'react';
import AutoCompletePlus from '../../controls/AutoCompletePlus';
import CenterBox from '../../controls/CenterBox';
const Map = dynamic(() => import('../../controls/OpenLayerMap'), { ssr: false });

const MyPlaces = () => {

    return (
        <CenterBox>
            <AutoCompletePlus sx={{ width: '100%' }} items={[]} label={''} />
            <Map currentLocation={[]} onLocationChanged={() => void 0} />
        </CenterBox>

    );
};

export default MyPlaces;