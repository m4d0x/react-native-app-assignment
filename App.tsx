import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Ska innehålla inputfältet för hemligheterna och eventuellt en rullande lista med upvoted hemligheter
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

//denna ska egentligen innehålla en lista med alla hemligheter som finns i databasen
function PublicSecretsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}
//Profile screen ska innehålla en lista med alla hemligheter som användaren har skapat för att kunna redigera dem/ta bort dem
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

//Settings screen ska mer eller mindre bara innehålla settings för appen, som att byta tema, byta användare, logga ut, etc.
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
            name='Secrets'
            component={PublicSecretsScreen}
            options={{
              tabBarIcon: (props) => (
                <Fontisto
                  name='nav-icon-list-a'
                  size={props.size}
                  color='black'
                />
              ),
            }}
          />
          <Tabs.Screen
            name='Profile'
            component={ProfileScreen}
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
