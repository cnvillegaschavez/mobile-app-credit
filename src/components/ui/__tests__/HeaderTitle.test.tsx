import React from 'react';
import HeaderTitle from '../HeaderTitle';
import {render} from '../../../utils/test/reactNativeTestingLibrary';

describe('HeaderTitle Component', () => {
  test('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <HeaderTitle title="Titulo" subTitle="SubTitulo" />,
      {},
    );
    expect(getByTestId('header-title')).toBeDefined();
    expect(getByText('Titulo')).toBeDefined();
    expect(getByText('SubTitulo')).toBeDefined();
  });
});
