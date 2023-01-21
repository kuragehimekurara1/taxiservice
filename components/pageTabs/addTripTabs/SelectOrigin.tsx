import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import PlacesSearchBox from '../../controls/PlacesSearchBox';
import { TaggedItem } from '../../controls/AutoCompletePlus';
import TextField from '@mui/material/TextField';
import { LanguageContext } from '../../context/LanguageContext';
import { TripContext } from '../../context/TripContext';

const Map = dynamic(() => import('../../../components/controls/OpenLayerMap'), { ssr: false });
export type SelectOriginProps = {
    onAddressChanged: (location: number[], address: string) => void;
    agencyLocation: number[];
};
const SelectOrigin = (props: SelectOriginProps) => {

    const { onAddressChanged: onLocationChanged, agencyLocation } = props;

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

    const markers = [{ location: agencyLocation, text: tripCreationPage.agency }];

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

export default SelectOrigin;