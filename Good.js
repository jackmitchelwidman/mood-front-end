import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './Header'
import createMood from './CreateMood';
import { useState } from 'react';
import getUserSessionValue from './SecurityCheck';
import getDefaultColorFromMood from './DefaultColors';
import Mood from './Mood';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  //Button,
  Alert,
} from 'react-native';

async function logout(n) {
  AsyncStorage.setItem("user", undefined).then(
    n.navigate('Login')
  ).catch(error => console.log(error))
}

async function checkUserLogin(n) {
  
  AsyncStorage.getItem('user').then(value => {
    console.log('value=' + value)
    if (value == undefined) {
      n.navigate('Login')
    }
  }).catch(error => console.log(error));
}

const Good = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  
  getUserSessionValue().then(value => setEmail(value));
  
  var isoString = new Date().toISOString();
  
  const year = isoString.substring(0, 4);
  const month = isoString.substring(5, 7);
  const day = isoString.substring(8, 10);
  const time = isoString.substring(11, 19);
  
  var now = year + "-" + month + "-" + day + " " + time;
  
  return (
    <>
      
      <Header/>
      
      <SafeAreaView style={styles.container}>
      
        <View style={styles.parent}>
          <Mood word={'excellent'} email={email} created={now} navigation={navigation} />
          <Mood word={'joyful'} email={email} created={now} navigation={navigation} />
          <Mood word={'excited'} email={email} created={now} navigation={navigation} />
          </View>
          <View style={styles.parent}>
          <Mood word={'content'} email={email} created={now} navigation={navigation} />
          <Mood word={'grateful'} email={email} created={now} navigation={navigation} />
          <Mood word={'playful'} email={email} created={now} navigation={navigation} />
          
        </View>
      </SafeAreaView>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    borderWidth: 0,
    fontSize: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    

  },

parent: {
  borderWidth: 0,
  borderColor: "#00BFFF",
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-around',

},
title: {
  textAlign: 'center',
  color: '#00BFFF',
  fontSize: 100,
  backgroundColor: "white",
},

question: {
  textAlign: 'center',
  color: 'grey',
  fontSize: 40,
  backgroundColor: "white",
},

buttontext: {
  color: 'black5',
  fontWeight: 'bold',
  fontSize: 20,
  borderWidth:  0 ,
  marginTop: 5,
  marginBottom: 5,
},
  buttonBasic: {
    borderRadius: 110,
    borderColor: "lightgrey",
    borderStyle: "solid 1",
    backgroundColor: "white",
    width: 110,
    height: 110,
     shadowColor: '',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
});


export default Good;