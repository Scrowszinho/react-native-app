import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormText, Input } from './styles';
import { TextInputProps } from 'react-native';

interface RhfInputProps<FieldsTypes extends FieldValues>
  extends TextInputProps {
  label?: string;
  control: Control<FieldsTypes>;
  name: Path<FieldsTypes>;
  errorMessage?: string;
}

export const RhfInput = <FieldsType extends FieldValues>({
  control,
  label,
  name,
  errorMessage,
  ...rest
}: RhfInputProps<FieldsType>) => {
  return (
    <FormControl>
      {label && (
        <FormText style={{ color: errorMessage ? '#FC5A5A' : '#909BB1' }}>
          {label}
        </FormText>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{
              borderColor: errorMessage ? '#FC5A5A' : '#d9d9d9',
            }}
            {...rest}
          />
        )}
      />
      {errorMessage && (
        <FormText style={{ color: '#FC5A5A' }}>{errorMessage}</FormText>
      )}
    </FormControl>
  );
};
