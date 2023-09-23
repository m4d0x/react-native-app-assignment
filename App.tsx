import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withTheme } from './src/components/withTheme';
import RootTabsNavigator from './src/navigators/RootTabsNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <RootTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default withTheme(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
