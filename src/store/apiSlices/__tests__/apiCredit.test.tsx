import type {ReactNode} from 'react';
import {renderHook, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';

import store from '../../store';
import {useGetCreditsQuery} from '../apiCredit';

const wrapper = ({children}: {children: ReactNode}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Provider store={store}>{children}</Provider>;
};

beforeEach(() => {
  fetchMock.resetMocks();
});
describe('getCreditsQuery', () => {
  const endpointName = 'getCredits';
  const credit = '';
  const data = {};

  beforeEach(() => {
    fetchMock.mockOnceIf(
      'https://mocki.io/v1/2156ae74-9927-4f44-8960-dbdbd0d798ac',
      () => {
        Promise.resolve({
          status: 200,
          body: JSON.stringify({data}),
        });
      },
    );
  });

  it('renders hook', async () => {
    const {result} = renderHook(() => useGetCreditsQuery(credit), {
      wrapper,
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toHaveBeenCalledTimes(0);

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    });
  });
});
