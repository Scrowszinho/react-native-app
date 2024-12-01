import { FormControl, FormText, SelectArea } from './styles';
import {
  Picker,
  PickerProps,
  PickerItemProps,
} from '@react-native-picker/picker';

interface RhfSelectProps extends PickerProps {
  label?: string;
  errorMessage?: string;
  items: Array<PickerItemProps>;
}

export const RhfSelect: React.FC<RhfSelectProps> = ({
  label,
  errorMessage,
  items,
  ...rest
}) => {
  return (
    <FormControl>
      {label && (
        <FormText style={{ color: errorMessage ? '#FC5A5A' : '#909BB1' }}>
          {label}
        </FormText>
      )}
      <SelectArea>
        <Picker
          {...rest}
          style={{
            marginTop: -16,
          }}
        >
          {items.map((item, index) => (
            <Picker.Item label={item.label} value={item.value} key={index} />
          ))}
        </Picker>
      </SelectArea>
      {errorMessage && (
        <FormText style={{ color: '#FC5A5A' }}>{errorMessage}</FormText>
      )}
    </FormControl>
  );
};
