import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
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
  const { colors } = useTheme();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <Fontisto name='home' size={props.size} color={props.color} />
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
              color={props.color}
            />
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
              color={props.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
