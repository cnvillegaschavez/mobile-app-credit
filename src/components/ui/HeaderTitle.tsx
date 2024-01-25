import React from 'react';
import {Text, VStack} from '@gluestack-ui/themed';

type Props = {
  title: string;
  subTitle: string;
};

const HeaderTitle: React.FC<Props> = ({title, subTitle}: Props) => {
  return (
    <VStack space="sm" testID="header-title">
      <VStack space="xs">
        <Text size="2xl" bold={true}>
          {title}
        </Text>
      </VStack>
      <Text size="sm">{subTitle}</Text>
    </VStack>
  );
};

export default HeaderTitle;
