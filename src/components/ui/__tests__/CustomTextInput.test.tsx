import React from 'react';
import {render} from '../../../utils/test/reactNativeTestingLibrary';
import CustomTextInput from '../CustomTextInput';

describe('CustomTextInput Component', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <CustomTextInput label="name" helpText="This field is required" />,
      {},
    );
    expect(getByText('name')).toBeDefined();
    expect(getByText('This field is required')).toBeDefined();
  });
});
