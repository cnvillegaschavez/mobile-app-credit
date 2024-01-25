import React from 'react';
import HeaderTitle from '../HeaderTitle';
import {render} from '../../../utils/test/reactNativeTestingLibrary';

describe('HeaderTitle Component', () => {
  test('renders correctly', () => {
    const renderResult = render(
      <HeaderTitle title="Titulo" subTitle="SubTitulo" />,
      {},
    );
    expect(renderResult.getByTestId('header-title')).toBeDefined();
    expect(renderResult.getByText('Titulo')).toBeDefined();
    expect(renderResult.getByText('SubTitulo')).toBeDefined();
  });

  // Add more tests as needed
});
