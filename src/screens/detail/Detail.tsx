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
import CreditItem from '../../components/ui/CreditItem';
import IModelCredit from '../../store/models/IModelCredit';
import {useRoute} from '@react-navigation/native';

type DetailProps = PropsWithChildren<{}>;
type RouteParams = {
  params?: {
    data?: IModelCredit;
  };
  key: string;
  name: string;
};

const Detail: React.FC<DetailProps> = () => {
  const route = useRoute<RouteParams>();
  const data = route?.params?.data;

  return (
    <SafeAreaView>
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
            {data && (
              <CreditItem
                key={data.id}
                name={data.name}
                value={data.value}
                symbol="$"
              />
            )}
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
