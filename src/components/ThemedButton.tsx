import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext'; // Anpassa detta efter din faktiska import

// type ButtonProps = React.ComponentProps<typeof Button>;

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  // ... Fler props om nödvändigt
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.buttonBackgroundColor },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: theme.buttonTextColor }]}>
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
