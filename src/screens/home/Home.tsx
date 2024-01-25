import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from '@gluestack-ui/themed';
import {TEXTS} from '../../core/constants/texts';
import RegisterForm from './components/RegisterForm';
import {HeaderTitle} from '../../components/ui';
import ModalCreditOption from './components/ModalCreditOption';
import {useNavigation} from '@react-navigation/native';
import paths from '../../core/constants/paths';
import {useLazyGetCreditsQuery} from '../../store/apiSlices/apiCredit';
import IModelCredit from '../../store/models/IModelCredit';

type HomeProps = PropsWithChildren<{}>;

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<IModelCredit[]>([]);
  const [getCredit, {isLoading}] = useLazyGetCreditsQuery();
  const handleSubmit = (_data: any) => {
    getCredit(undefined)
      .unwrap()
      .then(credit => {
        setData(credit?.data || []);
        setShowModal(true);
      });
  };

  const handleCloseModal = (item: IModelCredit | null) => {
    if (item) {
      navigation.navigate(paths.DETAIL, {data: item});
    }
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
            <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
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
