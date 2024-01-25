import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from '@gluestack-ui/themed';
import {TEXTS} from '../../core/constants/texts';
import RegisterForm from './components/RegisterForm';
import {HeaderTitle} from '../../components/ui';
import ModalCreditOption from './components/ModalCreditOption';
import {dataMock} from './model/model';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import paths from '../../core/constants/paths';

type HomeProps = PropsWithChildren<{}>;

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  let data = dataMock;
  const handleSubmit = (_data: any) => {
    setShowModal(true);
  };

  const handleCloseModal = (item: any) => {
    if (item) {
      navigation.navigate(paths.DETAIL, {data: item});
    }
    setShowModal(false);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
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
