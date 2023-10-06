//AnimatedToggleIcon.tsx:
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

import { useTheme } from '../contexts/ThemeContext';

type ToggleIconProps = {
  toggleIsActive: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  iconColor?: StyleProp<ViewStyle>;
  size?: number;
};

export const ToggleIcon: React.FC<ToggleIconProps> = ({
  toggleIsActive,
  onPress,
  iconStyle,
  size,
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={iconStyle}>
      <Icon
        name={toggleIsActive ? 'toggle-on' : 'toggle-off'}
        size={size}
        color={
          toggleIsActive
            ? theme.colors.toggleActiveColor
            : theme.colors.toggleActiveColor
        }
      />
    </TouchableOpacity>
  );
};
