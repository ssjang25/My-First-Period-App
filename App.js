import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer, DefaultTheme, createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './assets/components/HomeScreen';
import PurseScreen from './assets/components/PurseScreen';
import FridgeScreen from './assets/components/FridgeScreen';
import CalendarScreen from './assets/components/CalendarScreen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PurseScreen" component={PurseScreen} />
          <Stack.Screen name="FridgeScreen" component={FridgeScreen} /> 
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}

//Sets default background color of every screen to transparent so we can add custom background image
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};