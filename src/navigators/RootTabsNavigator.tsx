import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext'; // <-- import your custom useTheme
import HomeScreen from '../screens/HomeScreen';
import PublicSecretsScreen from '../screens/PublicSecretsScreen';
import SettingsScreen from '../screens/SettingsScreen';

type RootTabsParamList = {
  Home: undefined;
  Secrets: undefined;
  Settings: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function RootTabsNavigator() {
  const theme = useTheme(); // <-- use your custom theme

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.activeIconColor, // This changes both icon and text color when active
        tabBarInactiveTintColor: theme.secondary, // This changes both icon and text color when inactive
        tabBarStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <Fontisto
              name="home"
              size={props.size}
              color={props.focused ? theme.activeIconColor : props.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Secrets"
        component={PublicSecretsScreen}
        options={{
          tabBarIcon: (props) => (
            <Fontisto
              name="nav-icon-list-a"
              size={props.size}
              color={props.focused ? theme.activeIconColor : props.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: (props) => (
            <Fontisto
              name="player-settings"
              size={props.size}
              color={props.focused ? theme.activeIconColor : props.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
