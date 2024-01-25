import React from 'react';
import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  FormControlErrorIcon,
  InputField,
} from '@gluestack-ui/themed';

type Props = React.ComponentProps<typeof InputField> & {
  errorText?: string | undefined;
  label?: string | undefined;
  helpText?: string | undefined;
  value?: string | undefined;
};

const CustomTextInput = React.forwardRef(
  ({errorText, label, helpText, value, ...props}: Props, _ref: any) => (
    <FormControl>
      {label && (
        <FormControlLabel>
          <FormControlLabelText color={props.color} size="xs">
            {label}
          </FormControlLabelText>
        </FormControlLabel>
      )}
      <Input>
        <InputField {...props} defaultValue={value} />
      </Input>
      {helpText && (
        <FormControlHelper>
          <FormControlHelperText>{helpText}</FormControlHelperText>
        </FormControlHelper>
      )}

      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText> {errorText} </FormControlErrorText>
      </FormControlError>
    </FormControl>
  ),
);

export default CustomTextInput;
