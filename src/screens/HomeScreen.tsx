import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import AnswerText from '../components/HomeReactionText';
import { useTheme } from '../contexts/ThemeContext';

export default function HomeScreen() {
  const theme = useTheme();
  const [text, setText] = useState<string>('');
  const [storedText, setHomeReactionText] = useState<string | null>(null);
  const fadeAnim = 1;

  const handleYes = () => {
    if (text.trim() === '') {
      setHomeReactionText("You can't keep a secret if there is none!");
    } else {
      setHomeReactionText('Your secret is safe with me.');
    }
    setText('');
  };

  const handleNo = () => {
    setText('');
    setHomeReactionText('Catchy text for the "No" button.');
  };

  return (
    <View style={{ ...styles.container }}>
      <AnswerText text={storedText} fadeAnim={fadeAnim} />
      <Text style={{ ...styles.questionText, color: theme.theme.text }}>
        What's your dirty lil´ secret?
      </Text>
      <TextInput
        style={{
          ...styles.input,
          // borderColor: theme.textBorderColor,
          color: theme.theme.text,
        }}
        value={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Type here..."
        // placeholderTextColor={theme.textPlaceholderColor}
      />
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={handleYes} />
        <Button title="No" onPress={handleNo} />
      </View>
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
});
