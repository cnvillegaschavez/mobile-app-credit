import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from '@gluestack-ui/themed';
import {TEXTS} from '../../core/constants/texts';
import RegisterForm from './components/RegisterForm';
import {HeaderTitle} from '../../components/ui';
import ModalCreditOption from './components/ModalCreditOption';
import {dataMock} from './model/model';

type HomeProps = PropsWithChildren<{}>;

const Home: React.FC<HomeProps> = () => {
  const [showModal, setShowModal] = useState(false);
  let data = dataMock;
  const handleSubmit = (data: any) => {
    console.log(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView>
      <View p="$4" h="100%">
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <HeaderTitle
              title={TEXTS.HOME.TITLE}
              subTitle={TEXTS.HOME.SUBTITLE}
            />
            <RegisterForm onSubmit={handleSubmit} />
            <ModalCreditOption
              showModal={showModal}
              onClose={handleCloseModal}
              data={data}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
