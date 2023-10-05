// SecretTextInputField.tsx
import React, { useContext, useState } from 'react';
import {
  EnterKeyHintTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
} from 'react-native';

import ThemeContext from '../contexts/ThemeContext'; // Ersätt med din faktiska import

interface ThemedTextInputFieldProps {
  enterKeyHint?: EnterKeyHintTypeOptions;
  secureTextEntry?: boolean;
  selectTextOnFocus?: boolean;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  value?: string; // Lägg till denna
  onChangeText?: (newText: string) => void; // och denna
  // ... Fler props om nödvändigt
}

export default function ThemedTextInput(props: ThemedTextInputFieldProps) {
  const [isFocused, setFocus] = useState(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext is null');
  }

  const { theme } = themeContext;

  let borderColor;

  if (isFocused) {
    borderColor = theme.textInputFocusedBorderColor;
  } else {
    borderColor = theme.textInputUnfocusedBorderColor;
  }

  return (
    <TextInput
      {...props}
      style={[
        {
          borderColor,
          borderWidth: 3,
          borderStyle: 'solid',
          width: '90%',
          minHeight: 40,
          paddingHorizontal: 10,
          color: theme.text, // Lägg till denna rad för att sätta textfärgen
        },
        props.style,
      ]}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholderTextColor={theme.textInputFieldPlaceholderTextColor}
      enterKeyHint={props.enterKeyHint}
      secureTextEntry={props.secureTextEntry}
      selectTextOnFocus={props.selectTextOnFocus}
    />
  );
}
