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

//Funktion för att lagra en hemlighet
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

export const toggleLike = async (
  id: string,
  isLiked: boolean,
  setLikes: (likes: number) => void,
) => {
  try {
    // Först, hämta den befintliga arrayen av hemligheter
    const existingData: Secret[] | null = await getData();

    if (!existingData) return;

    let newLikesValue = 0; // För att hålla det nya antalet "likes"

    // Hitta rätt Secret och uppdatera dess likes
    const updatedData = existingData.map((secret) => {
      if (secret.id === id) {
        if (isLiked) {
          newLikesValue = secret.likes - 1; // Minskar antalet likes med 1 om redan gillad
          return { ...secret, likes: newLikesValue };
        }
        newLikesValue = secret.likes + 1; // Ökar antalet likes med 1 om inte gillad
        return { ...secret, likes: newLikesValue };
      }
      return secret;
    });

    // Använd setLikes för att uppdatera det lokala state-värdet
    setLikes(newLikesValue);

    // Omvandla till JSON och lagra
    const jsonValue = JSON.stringify(updatedData);
    await AsyncStorage.setItem('@secret_key', jsonValue);
  } catch (e) {
    // Error-handling här
  }
};
