//ToggleIcon.tsx:
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

type ToggleIconProps = {
  toggleIsActive: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  iconColor?: StyleProp<ViewStyle>;
};

// I ToggleIcon.tsx
export const ToggleIcon = ({ toggleIsActive, onPress }: ToggleIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={toggleIsActive ? 'toggle-on' : 'toggle-off'} size={24} />
    </TouchableOpacity>
  );
};
