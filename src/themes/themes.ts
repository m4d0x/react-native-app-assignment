// themes.ts
export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  borderColor: string;
  text: string;
  error: string;
  statusBarStyle: 'auto' | 'inverted' | 'light' | 'dark';
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;
}

export const lightTheme: Theme = {
  primary: '#ffffff',
  secondary: '#ffffff',
  background: '#ffffff',
  borderColor: '#ffffff',
  text: '#000000',
  error: '#ff0000',
  statusBarStyle: 'light',
  tabBarActiveTintColor: '#ff0000',
  tabBarInactiveTintColor: '#303',
};

export const darkTheme: Theme = {
  primary: '#000000',
  secondary: '#blue',
  background: '#000000',
  borderColor: '#000000',
  text: '#ffffff',
  statusBarStyle: 'dark',
  error: '#ff4b4b',
  tabBarActiveTintColor: '#ff0000',
  tabBarInactiveTintColor: '#f0f000',
};

//excluded parts from interface;
// surface: string;
// buttonColor: string;
// outerBackgroundColor: string;
// textBorderColor: string;
// textPlaceholderColor: string;
// iconColor: string;

//exlucded parts from lightTheme
// surface: '#ffffff',
// buttonColor: '#000000',
// outerBackgroundColor: '#f0f0f0',
// textBorderColor: '#c0c0c0',
// textPlaceholderColor: '#a0a0a0',
// iconColor: '#709',

//exluded parts from darkTheme
// surface: '#121212',
// buttonColor: '#ffffff',
// outerBackgroundColor: '#606060',
// textBorderColor: '#505050',
// textPlaceholderColor: '#808080',
// iconColor: '#ffffff',
