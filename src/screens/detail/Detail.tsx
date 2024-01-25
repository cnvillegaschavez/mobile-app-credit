import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  Button,
  ButtonText,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import {TEXTS} from '../../core/constants/texts';
import {HeaderTitle} from '../../components/ui';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CreditItem from '../../components/ui/CreditItem';
import IModelCredit from '../../store/models/IModelCredit';

type DetailProps = PropsWithChildren<{}>;

const Detail: React.FC<DetailProps> = ({route}) => {
  const data = route?.params?.data as IModelCredit;

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
              title={TEXTS.DETAIL.TITLE}
              subTitle={TEXTS.DETAIL.SUBTITLE}
            />
            <Text size="sm" mt={60} mb={4}>
              {TEXTS.DETAIL.CREDIT_SELECT}
            </Text>
            <CreditItem
              key={data.id}
              name={data.name}
              value={data.value}
              symbol="$"
            />
            <VStack mt={50}>
              <Button size="lg">
                <ButtonText>{TEXTS.DETAIL.HIRE}</ButtonText>
              </Button>
            </VStack>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
