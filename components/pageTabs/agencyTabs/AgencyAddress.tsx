import PlacesSearchBox from '../../controls/PlacesSearchBox';
import TabPanel from '../../controls/TabPanel';
import dynamic from 'next/dynamic';
import { ItemProps } from '../../controls/AutoCompletePlus';
import { useState } from 'react';

export type AgencyAddressProps = {
    currentStep: number;
    localization: string,
};

const Map = dynamic(() => import('../../controls/OpenLayerMap'), { ssr: false });

const AgencyAddress = (props: AgencyAddressProps) => {

    const { currentStep, localization } = props;

    const [city, setCity] = useState<ItemProps | null>(null);

    return (
        <TabPanel activeIndex={currentStep.toString()} index='2'>
            <PlacesSearchBox localization={localization} onChange={(item) => setCity(item)} />
            <Map />
        </TabPanel>
    );
};

export default AgencyAddress;