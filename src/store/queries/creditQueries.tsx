import {endpoints} from '../../core/constants';
import IModelCredit from '../models/IModelCredit';

export const getCredits = {
  query: () => ({url: endpoints.credit.list}),
  transformResponse: (response: {data: IModelCredit[]}) => response,
  keepUnusedDataFor: 0,
};
