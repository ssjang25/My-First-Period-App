// import React, { Component, useState, TimerPrompt } from "react";
import * as React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from "react-native";
import {  useLocation } from '@react-navigation/native';

export default function PurseScreen({ navigation}) {
  const tampon = require("../Items/Tampon.png");
  const pad = require("../Items/Pad.png");
  const painkillers = require("../Items/Painkillers.png");
  const birthcontrol = require("../Items/BirthControl.png");
  const underwear = require("../Items/Underwear.png");
  const heatingpad = require("../Items/HeatingPad.png");
  

  
  // function checkGuess(pickedItem) {
  //   if(route.location.state === pickedItem) {
  //     Alert.alert(
  //       'Correct!',
  //       'Tampon has been picked up',
  //       [
  //         {text: 'Put In Tampon', onPress: () => {navigation.navigate('HomeScreen', {tampon})}},
  //         {text: 'Don\'t Put In Tampon'}
  //       ]
  //     )
  //   }
  //   else {
  //     Alert.alert(
  //       'Wrong :(',
  //       '',
  //       [
  //         {text: 'Try Again', onPress: () => {navigation.navigate('HomeScreen', {tampon})}}
  //       ]
  //     )
  //   }
  // }

  
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../Screens/PurseScreen.png')} style={{width: '100%', height: '100%'}}>
       <TouchableOpacity onPress={() => Alert.alert(
        'Tampon has been picked up',
        '',
        [
          {text: 'Put In Tampon', onPress: () => navigation.navigate('HomeScreen', {tampon})},
          {text: 'Don\'t Put In Tampon'}
        ]
      )}>
          <Image 
          source={tampon}
          style={styles.tampon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert(
        'Pad has been picked up',
        '',
        [
          {text: 'Put On Pad', onPress: () => navigation.navigate('HomeScreen', pad)},
          {text: 'Don\'t Put On Pad'}
        ]
      )}>
          <Image 
          source={pad}
          style={styles.pad}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Painkillers has been picked up',
        '',
        [
          {text: 'Take painkillers', onPress: () => navigation.navigate('HomeScreen', painkillers)},
          {text: 'Don\'t take painkillers'}
        ]
      )}>
          <Image 
          source={painkillers}
          style={styles.painkillers}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Birth Control has been picked up',
        '',
        [
          {text: 'Take Birth Control', onPress: () => navigation.navigate('HomeScreen', birthcontrol)},
          {text: 'Don\'t Take Birth Control'}
        ]
      )}>
          <Image 
          source={birthcontrol}
          style={styles.birthcontrol}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Underwear has been picked up',
        '',
        [
          {text: 'Put On New Underwear', onPress: () => navigation.navigate('HomeScreen', underwear)},
          {text: 'Don\'t Put On New Underwear'}
        ]
      )}>
          <Image 
          source={underwear}
          style={styles.underwear}
          />
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => Alert.alert(
        'Heating pad has been picked up',
        '',
        [
          {text: 'Use Heating Pad', onPress: () => navigation.navigate('HomeScreen', heatingpad)},
          {text: 'Don\'t Use Heating Pad'}
        ]
      )}>
          <Image 
          source={heatingpad}
          style={styles.heatingpad}
          />
        </TouchableOpacity>
        
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
  tampon: {
    flex: 5,
    width: 200,
    height: 200,
    position: 'absolute',
    top: 180,
    right: 205
  },
  pad: {
    flex: 5,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 150,
    left: 115
  },
  birthcontrol: {
    flex: 5,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 350,
    left: 110
  },
  painkillers: {
    flex: 5,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 350,
    left: 0
  },
  underwear: {
    flex: 5,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 190,
    right: 0
  },
  heatingpad: {
    flex: 5,
    width: 130,
    height: 130,
    position: 'absolute',
    top: 350,
    right: 0
  }
});