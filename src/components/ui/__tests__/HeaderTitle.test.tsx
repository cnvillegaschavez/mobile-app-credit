import React from 'react';
import HeaderTitle from '../HeaderTitle';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

describe('HeaderTitle Component', () => {
  test('renders correctly', () => {
    /*const {getByTestId} = renderer.create(
      <HeaderTitle title="Titulo" subTitle="SubTitulo" />,
    );
    expect(getByTestId('header-title')).toBeDefined();*/

    const tree = renderer
      .create(<HeaderTitle title="Titulo" subTitle="SubTitulo" />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });

  // Add more tests as needed
});
