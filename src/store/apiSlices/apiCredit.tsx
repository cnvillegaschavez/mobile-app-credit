import {getCredits} from '../queries/creditQueries';
import apiSlice from './apiSlice';

export const apiCredit = apiSlice.injectEndpoints({
  endpoints: build => ({
    getCredits: build.query(getCredits),
  }),
});

export const {useLazyGetCreditsQuery} = apiCredit;
export default apiCredit;
