import React from 'react';
import RegisterForm from '../RegisterForm';
import {render} from '../../../../utils/test/reactNativeTestingLibrary';
import {TEXTS} from '../../../../core/constants';
describe('RegisterForm Component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<RegisterForm isLoading={false} />, {});
    expect(getByText(TEXTS.REGISTER_FORM.LABELS.BTN_DISCOVER)).toBeDefined();
  });
});
