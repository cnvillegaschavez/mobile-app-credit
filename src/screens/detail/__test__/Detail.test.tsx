import React from 'react';
import {render} from '../../../utils/test/reactNativeTestingLibrary';
import Detail from '../Detail';
import {TEXTS} from '../../../core/constants';
import {RouteProp} from '@react-navigation/native';

describe('Detail Component', () => {
  const route = {} as RouteProp<{}, 'Detail'>;

  test('renders correctly', () => {
    const {getByText} = render(<Detail route={route}/>, {});

    expect(getByText(TEXTS.DETAIL.TITLE)).toBeDefined();
    expect(getByText(TEXTS.DETAIL.SUBTITLE)).toBeDefined();
  });
});
