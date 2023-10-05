// themes.ts
export interface Theme {
  //within App.tsx(StatusBar)
  statusBarStyle: 'auto' | 'inverted' | 'light' | 'dark';

  //within App.tsx(BottomTabNavigator)
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;

  //within App.tsx
  primary: string;
  secondary: string;
  background: string;
  borderColor: string;
  text: string;
  error: string;

  //within HomeScreen
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  textInputFieldPlaceholderTextColor: string;
  textInputFocusedBorderColor: string;
  textInputUnfocusedBorderColor: string;
  animatedText: string;

  //within SettingsScreen
  toggleActiveColor: string;
  toggleInactiveColor: string; //Just in case we want another look at the toggles if inactive.
}

export const lightTheme: Theme = {
  primary: '#ffffff',
  secondary: '#ffffff',
  background: '#ffffff',
  borderColor: '#ffffff',
  buttonTextColor: '#ffffff',
  buttonBackgroundColor: '#2294FF',
  text: '#000000',
  error: '#ff0000',
  statusBarStyle: 'light',
  tabBarActiveTintColor: '#ff0000',
  tabBarInactiveTintColor: '#303',
  textInputFocusedBorderColor: '#2294FF',
  textInputUnfocusedBorderColor: '#C8C8C8',
  textInputFieldPlaceholderTextColor: '#000000',
  toggleActiveColor: '#2294FF',
  toggleInactiveColor: '#000000',
  animatedText: '#ff0000',
};

export const darkTheme: Theme = {
  primary: '#000000',
  secondary: '#2294FF',
  background: '#000000',
  borderColor: '#000000',
  buttonTextColor: '#000000',
  buttonBackgroundColor: '#ff4b4b',
  text: '#ffffff',
  statusBarStyle: 'dark',
  error: '#ff4b4b',
  tabBarActiveTintColor: '#ff4b4b',
  tabBarInactiveTintColor: '#717171',
  textInputFocusedBorderColor: '#ff0000',
  textInputUnfocusedBorderColor: '#717171',
  textInputFieldPlaceholderTextColor: '#ff4b4b',
  toggleActiveColor: '#ff4b4b',
  toggleInactiveColor: '#717171',
  animatedText: '#ff0000',
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
