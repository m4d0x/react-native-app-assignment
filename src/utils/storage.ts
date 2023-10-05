//storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// Funktion för att spara en hemlighet
export const storeData = async (value: string) => {
  try {
    // Först, hämta den befintliga arrayen av hemligheter
    const existingData = await getData();

    // Lägg till den nya hemligheten till arrayen
    const updatedData = existingData ? [...existingData, value] : [value];

    // Omvandla till JSON och lagra
    const jsonValue = JSON.stringify(updatedData);
    await AsyncStorage.setItem('@secret_key', jsonValue);
  } catch (e) {
    // Error saving data
  }
};

// Funktion för att hämta alla hemligheter
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@secret_key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // Error reading data
    return null;
  }
};
