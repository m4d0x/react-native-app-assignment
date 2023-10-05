//storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definiera en typ för en hemlighet
type Secret = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number; // Nytt attribut för att hålla reda på antalet likes som getts till en secret
};

export const storeData = async (value: string) => {
  try {
    // Först, hämta den befintliga arrayen av hemligheter
    const existingData: Secret[] | null = await getData();

    // Skapa en ny hemlighet
    const newSecret: Secret = {
      id: Date.now().toString(), // En unik ID baserad på nuvarande tid
      author: 'anonymous', // Hårdkodad till "anonymous"
      text: value,
      timestamp: new Date().toISOString(),
      likes: 0, // När en hemlighet skapas har den 0 likes
    };

    // Lägg till den nya hemligheten till arrayen
    const updatedData = existingData
      ? [...existingData, newSecret]
      : [newSecret];

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
    console.log('Fetched data:', jsonValue); // Loggar data som hämtats
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // Error reading data
    console.log('Error fetching data:', e); // Loggar eventuella fel
    return null;
  }
};
