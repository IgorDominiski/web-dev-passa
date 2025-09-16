import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import TeamsScreen from '../screens/TeamsScreen';
import TournamentsScreen from '../screens/TournamentsScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Jogos') {
              iconName = focused ? 'football' : 'football-outline';
            } else if (route.name === 'Times') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Torneios') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e40af',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: '#e5e7eb',
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: '#1e40af',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Passa a Bola' }}
        />
        <Tab.Screen 
          name="Jogos" 
          component={MatchesScreen}
          options={{ title: 'Jogos' }}
        />
        <Tab.Screen 
          name="Times" 
          component={TeamsScreen}
          options={{ title: 'Times' }}
        />
        <Tab.Screen 
          name="Torneios" 
          component={TournamentsScreen}
          options={{ title: 'Torneios' }}
        />
        <Tab.Screen 
          name="Sobre" 
          component={AboutScreen}
          options={{ title: 'Sobre' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
