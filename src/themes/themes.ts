// themes.ts
export interface Theme {
  //within App.tsx
  primary: string;
  secondary: string;
  background: string;
  borderColor: string;
  text: string;
  error: string;
  themedGradientLinearTint: string;

  //within App.tsx(StatusBar)
  statusBarStyle: 'auto' | 'inverted' | 'light' | 'dark';

  //within App.tsx(BottomTabNavigator)
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;

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

  //within SecretScreen
  cardBackground: string;
  cardText: string;
}

export const lightTheme: Theme = {
  //within App.tsx
  primary: '#ffffff',
  secondary: '#ffffff',
  background: '#ffffff',
  borderColor: '#ffffff',
  text: '#000000',
  error: '#ff0000',
  themedGradientLinearTint: 'rgba(255,255,255, 1)',
  //within App.tsx(StatusBar)
  statusBarStyle: 'light',
  //within App.tsx(BottomTabNavigator)
  tabBarActiveTintColor: '#2294FF',
  tabBarInactiveTintColor: '#303',
  //within HomeScreen
  buttonTextColor: '#ffffff',
  buttonBackgroundColor: '#2294FF',
  textInputFocusedBorderColor: '#2294FF',
  textInputUnfocusedBorderColor: '#C8C8C8',
  textInputFieldPlaceholderTextColor: '#000000',
  animatedText: '#ff0000',
  //within SettingsScreen
  toggleActiveColor: '#2294FF',
  toggleInactiveColor: '#000000',
  //within SecretScreen
  cardBackground: 'rgba(128, 128, 128, 0.3)',
  cardText: '#000',
};

export const darkTheme: Theme = {
  //within App.tsx
  primary: '#000000',
  secondary: '#2294FF',
  background: '#000000',
  borderColor: '#000000',
  text: '#ffffff',
  error: '#ff4b4b',
  themedGradientLinearTint: 'rgba(0, 0, 0, 0.2)',
  //within App.tsx(StatusBar)
  statusBarStyle: 'dark',
  //within App.tsx(BottomTabNavigator)
  tabBarActiveTintColor: '#ff4b4b',
  tabBarInactiveTintColor: '#717171',
  //within HomeScreen
  buttonTextColor: '#000000',
  buttonBackgroundColor: '#ff4b4b',
  textInputFocusedBorderColor: '#ff0000',
  textInputUnfocusedBorderColor: '#717171',
  textInputFieldPlaceholderTextColor: '#ff4b4b',
  animatedText: '#ff0000',
  //within SettingsScreen
  toggleActiveColor: '#ff4b4b',
  toggleInactiveColor: '#717171',
  //within SecretScreen
  cardBackground: 'rgba(255, 255, 255, 0.3)',
  cardText: '#ff4b4b',
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
