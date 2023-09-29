import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import { useTheme, useToggleTheme } from '../contexts/ThemeContext';
import { lightTheme } from '../themes/themes';

const ThemedToggleIcon = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const iconColor = theme.text;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.outerBackgroundColor, // Use the theme's outerBackgroundColor
      }}
    >
      <Icon
        name={theme === lightTheme ? 'toggle-off' : 'toggle-on'}
        size={24}
        color={iconColor}
        onPress={toggleTheme}
      />
    </View>
  );
};

export default ThemedToggleIcon;
