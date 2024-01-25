import React from 'react';
import {View, VStack, ButtonText, Button} from '@gluestack-ui/themed';
import {Controller, useForm} from 'react-hook-form';
import {EMAIL, NAME, initialValues} from '../model/schema';
import {TEXTS} from '../../../core/constants/texts';
import {CustomTextInput} from '../../../components/ui/index';
import {useColorScheme} from 'react-native';
type Props = {
  defaultValues?: any;
  onSubmit?: (data: any) => void;
};

const RegisterForm: React.FC<Props> = ({defaultValues, onSubmit}: Props) => {
  const {
    control,
    formState: {errors = {}, isValid},
    handleSubmit,
  } = useForm({
    defaultValues: {
      ...initialValues,
      ...defaultValues,
    },
    values: defaultValues,
    mode: 'onTouched',
  });

  const isDarkMode = useColorScheme() === 'dark';

  const handleSubmitForm = (_data: any) => {
    onSubmit && onSubmit(_data);
  };
  return (
    <View pt="$4">
      <VStack space="xl">
        <VStack space="xs">
          <Controller
            control={control}
            name={NAME}
            rules={{
              required: {
                value: true,
                message: TEXTS.REGISTER_FORM.Required,
              },
            }}
            render={({field}) => (
              <CustomTextInput
                {...field}
                label={TEXTS.REGISTER_FORM.LABELS.NAME}
                onChangeText={field.onChange}
                color={isDarkMode ? '$white' : '$black'}
                errorText={errors[NAME]?.message as string}
              />
            )}
          />
        </VStack>
        <VStack space="xs">
          <Controller
            control={control}
            name={EMAIL}
            rules={{
              required: {
                value: true,
                message: TEXTS.REGISTER_FORM.Required,
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: TEXTS.REGISTER_FORM.Required,
              },
            }}
            render={({field}) => (
              <CustomTextInput
                {...field}
                label={TEXTS.REGISTER_FORM.LABELS.EMAIL}
                onChangeText={field.onChange}
                color={isDarkMode ? '$white' : '$black'}
                errorText={errors[EMAIL]?.message}
              />
            )}
          />
        </VStack>
        <VStack>
          <Button
            isDisabled={!isValid}
            size="lg"
            onPress={handleSubmit(handleSubmitForm)}>
            <ButtonText>{TEXTS.REGISTER_FORM.LABELS.BTN_DISCOVER}</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </View>
  );
};

export default RegisterForm;