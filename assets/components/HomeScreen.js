import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TouchableOpacity, Image, ImageBackground, Animated, PanResponder, Platform} from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from '@react-navigation/native';

export default function HomeScreen ({ route, navigation }) {
  let mood = require("../Items/Neutral.png");
  let happy = require("../Items/Happy.png");
  let grumpy = require("../Items/Grumpy.png");
  let neutral = require("../Items/Neutral.png");
  const grumpyArray = [birthcontrol, tampon, pad, painkillers, underwear, heatingpad, carrot, chocolate, cupcake, fruits, icecream, waterbottle];
  const grumpyPrompts = ["It's time for her to take her birth control. Check her purse!", "Go change her tampon. Check her purse!", "Go change her pad. Check her purse!", "She needs some painkillers. Check her purse!", "She needs to change her underwear. Check her purse!", "Go get a heating pad for her cramps. Check her purse!",
"She wants to eat a vegatable. Go grab a carrot from the fridge", "She's craving sweets. Go grab some chocolate from the fridge", "She's craving sweets. Go grab a cupcake from the fridge", "She's hungry. Go grab some fruit from the fridge", "She wants to treat herself. Get some ice cream from the freezer", "She's thirsty. Go grab her water bottle from the fridge"];


  const tampon = require("../Items/Tampon.png");
  const pad = require("../Items/Pad.png");
  const birthcontrol = require("../Items/BirthControl.png");
  const painkillers = require("../Items/Painkillers.png");
  const underwear = require("../Items/Underwear.png");
  const heatingpad = require("../Items/HeatingPad.png");
  const carrot = require("../Items/Carrot.png");
  const chocolate = require("../Items/Chocolate.png");
  const cupcake = require("../Items/Cupcake.png");
  const fruits = require("../Items/Fruits.png");
  const icecream = require("../Items/IceCream.png");
  const waterbottle = require("../Items/WaterBottle.png");

  function randomPrompt() {
    const answerNum = Math.floor(Math.random() * grumpyArray.length);
    const grumpyPrompt = grumpyPrompts[answerNum]; 
    expectedAnswer = grumpyArray[answerNum];
    return grumpyPrompt;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Screens/HomeScreen.png')} style={{width: '100%', height: '100%'}}>
         <TouchableOpacity onPress={() => navigation.navigate("PurseScreen")}>
            <Image
            style={styles.purse}
            source={require("../Items/Purse.png")}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FridgeScreen")}> 
            <Image
            style={styles.fridge}
            source={require("../Items/Fridge.png")}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
           Alert.alert(
            randomPrompt(),
            "",
            [
              {text: 'Got it!'}
            ]
          )
        }> 
            <Image
            style={styles.girl}
            source={grumpy}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CalendarScreen")}> 
            <Image
            style={styles.calendar}
            source={require("../Items/Calendar.png")}
            />
        </TouchableOpacity>
      </ImageBackground>
      {/* //<Image 
        //source={item}
      ///> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
  },
  loginForm: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  purse: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 50,
    right: 230
  },
  girl: {
    width: 380,
    height: 410,
    position: 'absolute',
    top: 400
  },
  fridge:{
    width: 150,
    height: 150,
    position: 'absolute',
    top: 50,
    left: 250
  },
  calendar:{
    width: 100,
    height: 100,
    position: 'absolute',
    top: 70,
    left: 145
  }
});
