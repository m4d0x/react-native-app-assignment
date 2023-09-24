import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // <-- import useTheme from your custom file

export default function HomeScreen() {
  const { theme } = useTheme(); // <-- use the theme from context
  const [text, setText] = useState<string>('');
  const [storedText, setStoredText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleYes = () => {
    if (text.trim() === '') {
      setError("You can't keep a secret if there is none!"); // Sätt ett felmeddelande
      return;
    }
    setStoredText(text);
    setText('');
    setError(null); // Nollställ felmeddelandet
  };

  const handleNo = () => {
    setText('');
    setError(null); // Nollställ felmeddelandet
  };

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <Text style={{ ...styles.questionText, color: theme.text }}>
        What's your dirty lil´ secret?
      </Text>
      <TextInput
        style={{ ...styles.input, borderColor: theme.text, color: theme.text }}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Yes' color={theme.buttonColor} onPress={handleYes} />
        <Button title='No' color={theme.buttonColor} onPress={handleNo} />
      </View>
      {error && (
        <Text style={{ ...styles.errorText, color: theme.error }}>{error}</Text>
      )}
      {storedText && (
        <Text style={{ color: theme.text }}>Your secret is safe with me.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  errorText: {
    marginBottom: 10,
  },
});
