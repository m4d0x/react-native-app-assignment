import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.colors.buttonBackgroundColor },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: theme.colors.buttonTextColor }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 4, //rundade hörn
    elevation: 3,
  },
  text: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
