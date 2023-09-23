import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Tabs.Navigator>
          <Tabs.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon: (props) => (
                <Fontisto name='home' size={props.size} color='black' />
              ),
            }}
          />
          <Tabs.Screen
            name='Details'
            component={DetailsScreen}
            options={{
              tabBarIcon: (props) => (
                <Fontisto name='search' size={props.size} color='black' />
              ),
            }}
          />
          <Tabs.Screen
            name='Settings'
            component={SettingsScreen}
            options={{
              tabBarIcon: (props) => (
                <Fontisto
                  name='player-settings'
                  size={props.size}
                  color='black'
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
