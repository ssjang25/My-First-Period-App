// import React, { Component, useState, TimerPrompt } from "react";
import * as React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function FridgeScreen({ navigation}) {
  const chocolate = require("../Items/Chocolate.png");
  const fruits = require("../Items/Fruits.png");
  const cupcake = require("../Items/Cupcake.png");
  const icecream = require("../Items/IceCream.png");
  const waterbottle = require("../Items/WaterBottle.png");
  const carrot = require("../Items/Carrot.png");

  return (
  <View style={styles.container}>
    <ImageBackground source={require('../Screens/FridgeScreen.png')} style={{width: '100%', height: '100%'}}>
      <TouchableOpacity onPress={() => Alert.alert(
        'Chocolate has been picked up',
        '',
        [
          {text: 'Eat Chocolate', onPress: () => {navigation.navigate('HomeScreen', chocolate)}},
          {text: 'Don\'t Eat Chocolate'}
        ]
      )}>
          <Image 
          source={chocolate}
          style={styles.chocolate}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Fruit Bowl has been picked up',
        '',
        [
          {text: 'Eat Fruit Bowl', onPress: () => navigation.navigate('HomeScreen', fruits)},
          {text: 'Don\'t Eat Fruit Bowl'}
        ]
      )}>
          <Image 
          source={fruits}
          style={styles.fruits}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Cupcake has been picked up',
        '',
        [
          {text: 'Eat Cupcake', onPress: () => navigation.navigate('HomeScreen', cupcake)},
          {text: 'Don\'t Eat Cupcake'}
        ]
      )}>
          <Image 
          source={cupcake}
          style={styles.cupcake}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Ice cream has been picked up',
        '',
        [
          {text: 'Eat Ice Cream', onPress: () => navigation.navigate('HomeScreen', icecream)},
          {text: 'Don\'t Eat Ice Cream'}
        ]
      )}>
          <Image 
          source={icecream}
          style={styles.icecream}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Water bottle has been picked up',
        '',
        [
          {text: 'Drink Water Bottle', onPress: () => navigation.navigate('HomeScreen', waterbottle)},
          {text: 'Don\'t Drink From Water Bottle'}
        ]
      )}>
          <Image 
          source={waterbottle}
          style={styles.waterbottle}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
        'Carrot has been picked up',
        '',
        [
          {text: 'Eat Carrot', onPress: () => navigation.navigate('HomeScreen', carrot)},
          {text: 'Don\'t Eat Carrot'}
        ]
      )}>
          <Image 
          source={carrot}
          style={styles.carrot}
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
  chocolate: {
    flex: 5,
    width: 100,
    height: 100,
    position: 'absolute',
    top: 190,
    right: 245
  },
  fruits: {
    flex: 5,
    width: 100,
    height: 100,
    position: 'absolute',
    top: 200,
    left: 140
  },
  cupcake: {
    flex: 5,
    width: 70,
    height: 70,
    position: 'absolute',
    top: 370,
    left: 160
  },
  icecream: {
    flex: 5,
    width: 120,
    height: 120,
    position: 'absolute',
    top: 330,
    left: 30
  },
  waterbottle: {
    flex: 5,
    width: 100,
    height: 100,
    position: 'absolute',
    top: 190,
    right: 20
  },

  carrot: {
    flex: 5,
    width: 80,
    height: 80,
    position: 'absolute',
    top: 350,
    right: 35
  }
});