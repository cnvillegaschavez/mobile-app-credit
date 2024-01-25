import React from 'react';
import {render} from '../../../utils/test/reactNativeTestingLibrary';
import Home from '../Home';
import {TEXTS} from '../../../core/constants';

describe('Home Component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<Home />, {});

    expect(getByText(TEXTS.HOME.TITLE)).toBeDefined();
    expect(getByText(TEXTS.HOME.SUBTITLE)).toBeDefined();
  });
});
