// themes.ts
export interface Theme {
  colors: {
    //within App.tsx
    primary: string;
    secondary: string;
    background?: string;
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
    cardBackground?: string;
    cardText: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    //within App.tsx
    primary: '#ffffff',
    secondary: '#ffffff',
    background: '#ffffff',
    borderColor: '#ffffff',
    text: '#000000',
    error: '#ff0000',
    themedGradientLinearTint: '#ffffff',

    //within App.tsx(StatusBar)
    statusBarStyle: 'light',

    //within App.tsx(BottomTabNavigator)
    tabBarActiveTintColor: '#2294FF',
    tabBarInactiveTintColor: '#303',

    //within HomeScreen
    buttonTextColor: '#ffffff',
    buttonBackgroundColor: '#000000',
    textInputFocusedBorderColor: '#2294FF',
    textInputUnfocusedBorderColor: '#C8C8C8',
    textInputFieldPlaceholderTextColor: 'rgba(0, 0, 0, 0.5)',
    animatedText: '#ff0000',

    //within SettingsScreen
    toggleActiveColor: '#2294FF',
    toggleInactiveColor: '#000000',

    //within SecretScreen
    cardBackground: 'rgba(128, 128, 128, 0.3)',
    cardText: '#000',
  },
};

export const darkTheme: Theme = {
  colors: {
    //within App.tsx
    primary: '#000000',
    secondary: '#2294FF',
    background: '#000000',
    borderColor: '#000000',
    text: '#ffffff',
    error: '#ff4b4b',
    themedGradientLinearTint: '#000000',

    //within App.tsx(StatusBar)
    statusBarStyle: 'dark',

    //within App.tsx(BottomTabNavigator)
    tabBarActiveTintColor: '#ff4b4b',
    tabBarInactiveTintColor: '#717171',

    //within HomeScreen
    buttonTextColor: '#000000',
    buttonBackgroundColor: '#ff4b4b',
    textInputFocusedBorderColor: '#ff0000',
    textInputUnfocusedBorderColor: '#2F2F2F',
    textInputFieldPlaceholderTextColor: 'rgba(255, 0, 0, 0.7)',
    animatedText: '#ff0000',

    //within SettingsScreen
    toggleActiveColor: '#ff4b4b',
    toggleInactiveColor: '#717171',

    //within SecretScreen
    cardBackground: 'rgba(255, 255, 255, 0.3)',
    cardText: '#ff4b4b',
  },
};
