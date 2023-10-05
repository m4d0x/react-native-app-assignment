//storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@secret_key', jsonValue);
  } catch (e) {
    // Error saving data
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@secret_key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // Error reading data
    return null;
  }
};
