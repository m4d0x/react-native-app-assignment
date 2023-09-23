import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
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
    <View style={styles.container}>
      <Text style={styles.questionText}>What's your dirty lil´ secret?</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Yes' onPress={handleYes} />
        <Button title='No' onPress={handleNo} />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {storedText && <Text>Your secret is safe with me.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
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
    color: 'red',
    marginBottom: 10,
  },
});
