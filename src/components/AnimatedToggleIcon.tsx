//AnimatedToggleIcon.tsx:
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

import { useTheme } from '../contexts/ThemeContext'; // Justera detta enligt din faktiska sökväg till ThemeContext

type ToggleIconProps = {
  toggleIsActive: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  iconColor?: StyleProp<ViewStyle>;
  size?: number; // Lägg till en size-prop
};

// I ToggleIcon.tsx
export const ToggleIcon: React.FC<ToggleIconProps> = ({
  toggleIsActive,
  onPress,
  iconStyle,
  size, // Ta emot size prop här
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={iconStyle}>
      <Icon
        name={toggleIsActive ? 'toggle-on' : 'toggle-off'}
        size={size}
        color={
          toggleIsActive ? theme.toggleActiveColor : theme.toggleActiveColor
        }
      />
    </TouchableOpacity>
  );
};
