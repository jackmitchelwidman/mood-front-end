import React from 'react';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import styles from './MoodStyles';

import {
  SafeAreaView,
  View,
} from 'react-native';

export async function logout(n) {
  AsyncStorage.setItem("user", '').then(
    n.navigate('Login')
  ).catch(error => console.log(error))
}

async function checkUserLogin(n) {
  
  AsyncStorage.getItem('user').then(value => {

    if (value == null) {
      n.navigate('Login');
    }
  }).catch(error => console.log(error));
}

const HomeScreen = () => {

  const navigation = useNavigation();  

  checkUserLogin(navigation)
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('Good')}>
          <Image source={require('./assets/good.png')} style={{ width: '100%', height:'100%'}} cache={"force-cache"}/>
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('Neutral')}>
          <Image source={require('./assets/neutral.png')} style={{ width: '100%', height:'100%'}} cache={"force-cache"}/>
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('Bad')}>
          <Image source={require('./assets/bad.png')} style={{ width: '100%', height:'100%'}} cache={"force-cache"}/>
          </TouchableOpacity>
          </View>
          </SafeAreaView>
    </>
    
  );
};




export default HomeScreen;