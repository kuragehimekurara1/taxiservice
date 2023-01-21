import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import PlacesSearchBox from '../../controls/PlacesSearchBox';
import { TaggedItem } from '../../controls/AutoCompletePlus';
import TextField from '@mui/material/TextField';
import { LanguageContext } from '../../context/LanguageContext';
import { TripContext } from '../../context/TripContext';

const Map = dynamic(() => import('../../../components/controls/OpenLayerMap'), { ssr: false });
export type SelectDestinationProps = {
    onAddressChanged: (location: number[], address: string) => void;
    agencyLocation: number[];
    originLocation: number[];
};
const SelectDestination = (props: SelectDestinationProps) => {

    const { onAddressChanged: onLocationChanged, agencyLocation, originLocation } = props;

    const { language } = useContext(LanguageContext);
    const { places } = useContext(TripContext);

    const [address, setAddress] = useState<string>('');
    const [currentLocation, setCurrentLocation] = useState<number[]>(agencyLocation);

    const { tripCreationPage } = language;

    const handleLocationChanged = (location: number[], address: string) => {

        onLocationChanged(location, address);
        setCurrentLocation(location);
        setAddress(address);
    };

    const updateMap = (location: TaggedItem<number[]> | null) => {
        if (location)
            handleLocationChanged(location.tag, address);
    };
    const customPlaces = places ? places.map(p => ({ tag: [p.latitude, p.longitude], displayText: p.address })) : [];

    const markers = [{ location: agencyLocation, text: tripCreationPage.agency }, { location: originLocation, text: tripCreationPage.origin }];

    return (
        <>
            <PlacesSearchBox customPlaces={customPlaces} onLocationChanged={updateMap} />
            <TextField label={tripCreationPage.address}
                required
                multiline
                sx={{ width: '100%' }}
                inputProps={{ maxLength: 800 }}
                onBlur={e => handleLocationChanged(currentLocation, e.target.value)}
            />
            <Map currentLocation={currentLocation} markers={markers} onLocationChanged={e =>
                handleLocationChanged(e, address)
            } />
        </>
    );
};

export default SelectDestination;