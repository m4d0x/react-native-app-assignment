import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { Text } from 'react-native';

import ThemeContext from '../contexts/ThemeContext';
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
  const { theme } = useContext(ThemeContext);
  // const themeContext = useContext(ThemeContext);

  // const { theme } = themeContext;

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => (
            <Text
              style={{
                color: props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor,
              }}
            >
              Secrets
            </Text>
          ),
          tabBarIcon: (props) => (
            <Fontisto
              name="home"
              size={props.size}
              color={
                props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Secrets"
        component={PublicSecretsScreen}
        options={{
          tabBarLabel: (props) => (
            <Text
              style={{
                color: props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor,
              }}
            >
              Secrets
            </Text>
          ),
          tabBarIcon: (props) => (
            <Fontisto
              name="nav-icon-list"
              size={props.size}
              color={
                props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: (props) => (
            <Text
              style={{
                color: props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor,
              }}
            >
              Secrets
            </Text>
          ),
          tabBarIcon: (props) => (
            <Fontisto
              name="player-settings"
              size={props.size}
              color={
                props.focused
                  ? theme.tabBarActiveTintColor
                  : theme.tabBarInactiveTintColor
              }
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
