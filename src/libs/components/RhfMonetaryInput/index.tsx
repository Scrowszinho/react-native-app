import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';
import { FormControl, FormText, Input } from '../RhfInput/styles';
import { TextInputProps } from 'react-native';

interface RhfMonetaryInputProps<FieldsTypes extends FieldValues>
  extends TextInputProps {
  label?: string;
  control: Control<FieldsTypes>;
  name: Path<FieldsTypes>;
  errorMessage?: string;
  variant?: 'default' | 'white';
}

export const RhfMonetaryInput = <FieldsType extends FieldValues>({
  control,
  label,
  name,
  errorMessage,
  variant,
  ...rest
}: RhfMonetaryInputProps<FieldsType>) => {
  function formatToCurrency(value: string | number) {
    const numericValue = (
      typeof value === 'string' ? value : value.toFixed(2)
    ).replace(/\D/g, '');
    if (!numericValue) return '';

    const formattedValue = numericValue
      .replace(/^0+(?!$)/, '')
      .padStart(3, '0')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');

    return `R$ ${formattedValue}`;
  }
  return (
    <FormControl>
      {label && (
        <FormText
          style={{
            color: errorMessage
              ? '#FC5A5A'
              : variant === 'white'
              ? 'white'
              : '#909BB1',
          }}
        >
          {label}
        </FormText>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={
          (rest.value as PathValue<FieldsType, Path<FieldsType>>) ??
          ('' as PathValue<FieldsType, Path<FieldsType>>)
        }
        render={({ field: { ref, ...field } }) => (
          <Input
            {...field}
            value={formatToCurrency(field.value)}
            onChangeText={(event) => {
              const valorFormatado = formatToCurrency(event);
              field.onChange(valorFormatado);
            }}
            {...rest}
            style={{
              color: errorMessage
                ? '#FC5A5A'
                : variant === 'white'
                ? 'white'
                : '#909BB1',
              fontWeight: variant === 'white' ? 'bold' : 400,
              fontSize: variant === 'white' ? 18 : 16,
              borderColor: errorMessage
                ? '#FC5A5A'
                : variant === 'white'
                ? 'white'
                : '#909BB1',
            }}
          />
        )}
      />
      {errorMessage && (
        <FormText style={{ color: '#FC5A5A' }}>{errorMessage}</FormText>
      )}
    </FormControl>
  );
};
