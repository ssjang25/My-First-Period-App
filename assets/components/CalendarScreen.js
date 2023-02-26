// import React, { Component, useState, TimerPrompt } from "react";
import * as React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function FridgeScreen({ navigation}) {
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../Screens/CalendarScreen.png')} style={{width: '100%', height: '100%'}}>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
  },
  loginForm: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
});