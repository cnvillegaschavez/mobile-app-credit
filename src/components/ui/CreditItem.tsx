import React from 'react';
import {Box, HStack, Text, VStack} from '@gluestack-ui/themed';

type Props = {
  name: string;
  symbol: string;
  value: number;
  onSelect?: (name: string) => void;
  colorSelected?: string;
};

const CreditItem: React.FC<Props> = ({
  name,
  symbol,
  value,
  onSelect,
  colorSelected = '#8EBCF7',
}: Props) => {
  return (
    <>
      <Box
        $dark-borderColor="$trueGray100"
        bgColor={colorSelected}
        $base-pl={0}
        $base-pr={0}
        $sm-pl="$4"
        $sm-pr="$5"
        borderRadius={4}
        mt={10}
        py="$3">
        <HStack
          space="md"
          justifyContent="space-between"
          onTouchStart={() => {
            onSelect && onSelect(name);
          }}>
          <VStack>
            <Text
              pl={4}
              fontSize="$sm"
              color="$white"
              fontWeight="$bold"
              $dark-color="$warmGray100">
              {name}
            </Text>
          </VStack>
          <Text
            pr={4}
            fontSize="$sm"
            color="$white"
            alignSelf="flex-start"
            $dark-color="$warmGray100">
            {symbol} {value}
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default CreditItem;
