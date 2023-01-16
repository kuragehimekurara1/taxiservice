import { createContext, Dispatch } from 'react';
import { AgencyDataList } from '../../types/agencies';
import { PlacesList } from '../../types/placeType';

export const TripContext = createContext<{
    agencies: AgencyDataList | undefined;
    places:PlacesList | undefined;
    setAgencies: Dispatch<AgencyDataList | undefined>;
    setPlaces: Dispatch<PlacesList | undefined>;
}>({
    agencies: undefined,
    places: undefined,
    setAgencies: () => void 0,
    setPlaces: () => void 0,
});