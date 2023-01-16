import { createContext, Dispatch } from 'react';
import { AgencyDataList } from '../../types/agencies';

export const TripContext = createContext<{
    agencies: AgencyDataList | undefined;
    setAgencies: Dispatch<AgencyDataList | undefined>;
}>({
    agencies: undefined,
    setAgencies: () => void 0
});