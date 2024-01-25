import React from 'react';
import ModalCreditOption from '../ModalCreditOption';
import {render} from '../../../../utils/test/reactNativeTestingLibrary';
describe('ModalCreditOption Component', () => {
  test('renders correctly', () => {
    const data = [
      {id: 1, name: 'Credito 1', value: 500},
      {id: 2, name: 'Credito 2', value: 1000},
    ];
    const {getByTestId} = render(
      <ModalCreditOption showModal={false} data={data} onClose={() => {}} />,
      {},
    );
    expect(getByTestId('modal-credit-option')).toBeDefined();
  });
});
