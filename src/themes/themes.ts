export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  borderColor: string; // Lägg till borderColor
  // dividerColor: string; // Om du behöver en egen färg för divider
  text: string;
  error: string;
  buttonColor: string;
  statusBarStyle: 'auto' | 'inverted' | 'light' | 'dark';
  activeIconColor: string;
  outerBackgroundColor: string;
  textBorderColor: string; // Add a borderColor for text in light theme
  textPlaceholderColor: string; // Placeholder text color in light theme
}

export const lightTheme: Theme = {
  primary: '#ffffff',
  secondary: '#000000',
  background: '#ffffff',
  // dividerColor: '#E0E0E0',
  text: '#000000',
  error: '#ff0000',
  buttonColor: 'blue',
  statusBarStyle: 'dark',
  activeIconColor: 'gray',
  borderColor: 'transparent',
  outerBackgroundColor: 'rgb(255, 255, 255)', // Lägg till den önskade bakgrundsfärgen för yttre diven i ljusläge
  textBorderColor: 'darkgray', // Add a borderColor for text in light theme
  // text: '#000000', // Adjust text color to be darker in light theme
  textPlaceholderColor: 'gray', // Placeholder text color in light theme
};

export const darkTheme: Theme = {
  primary: '#000000',
  secondary: '#ffffff',
  background: '#000000',
  // dividerColor: '#424242',
  text: '#ffffff',
  error: '#ff0000',
  buttonColor: 'red',
  statusBarStyle: 'light',
  activeIconColor: 'red',
  borderColor: 'transparent',
  outerBackgroundColor: 'rgb(0, 0, 0)', // Lägg till den önskade bakgrundsfärgen för yttre diven i mörkt läge
  textBorderColor: 'lightgray', // Add a borderColor for text in dark theme
  // text: '#f0f0f0', // Adjust text color to be lighter in dark theme
  textPlaceholderColor: 'lightgray', // Placeholder text color in dark theme
};
