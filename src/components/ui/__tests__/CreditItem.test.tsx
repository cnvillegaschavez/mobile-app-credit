import React from 'react';
import {render} from '../../../utils/test/reactNativeTestingLibrary';
import CreditItem from '../CreditItem';

describe('CreditItem Component', () => {
  test('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <CreditItem name="Credit 1" symbol="$" value={1200} />,
      {},
    );
    expect(getByTestId('credit-item')).toBeDefined();
    expect(getByText('Credit 1')).toBeDefined();
  });
});
