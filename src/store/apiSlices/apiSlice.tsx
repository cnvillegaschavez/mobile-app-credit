import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ConfigApp from '../../core/config';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: ConfigApp.baseUrlApi}),
  tagTypes: [],
  endpoints: () => ({}),
});

export const {middleware, reducer, reducerPath, util} = apiSlice;

export default apiSlice;
