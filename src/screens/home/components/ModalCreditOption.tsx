import {
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {HeaderTitle} from '../../../components/ui';
import {TEXTS} from '../../../core/constants/texts';
import CreditItem from '../../../components/ui/CreditItem';
import IModelCredit from '../../../store/models/IModelCredit';

type Props = {
  showModal: boolean;
  data: IModelCredit[];
  onClose: (item: IModelCredit | null) => void;
};

const ModalCreditOption: React.FC<Props> = ({showModal, data, onClose}) => {
  const ref = React.useRef(null);
  const [selectedItem, setSelectedItem] = useState<IModelCredit | null>(null);

  return (
    <Center testID="modal-credit-option">
      <Modal
        isOpen={showModal}
        onClose={() => {
          onClose(null);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <HeaderTitle
              title={TEXTS.HOME.MODAL_CREDIT.TITLE}
              subTitle={TEXTS.HOME.MODAL_CREDIT.SUBTITLE}
            />
          </ModalHeader>
          <ModalBody>
            <ScrollView>
              {data.map(item => (
                <CreditItem
                  key={item.id}
                  name={item.name}
                  value={item.value}
                  symbol="$"
                  onSelect={name => {
                    const credit = data.find(x => x.name === name) ?? null;
                    setSelectedItem(credit);
                  }}
                  colorSelected={
                    selectedItem?.id === item.id ? '$primary500' : '#8EBCF7'
                  }
                />
              ))}
            </ScrollView>
            <VStack mt={20} mb={25}>
              <Button
                size="lg"
                isDisabled={!selectedItem}
                onPress={() => {
                  onClose(selectedItem);
                }}>
                <ButtonText>
                  {TEXTS.REGISTER_FORM.LABELS.BTN_SELECT_CREDIT}
                </ButtonText>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ModalCreditOption;
