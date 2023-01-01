import React from 'react';
import {TouchableOpacity, TabView,Text} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import LoginScreen, { SocialButton } from "react-native-login-screen";

import {
  StatusBar,
  StyleSheet,
 } from 'react-native';
import { registerRootComponent } from 'expo';

const Login = () => {
  
    const navigation = useNavigation();
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MOOD</Text>
      <Text style={styles.question}>How do you feel?</Text>
      
      <LoginScreen
        onLoginPress={() => { navigation.navigate('HomeScreen')}}
        onSignupPress={() => { navigation.navigate('RegisterScreen')}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
      >
        <SocialButton text="Continue with Google" onPress={() => {}}
        text="Continue with Google"
        imageSource={require("./assets/gmail.png")}
        />
        <SocialButton
        text="Continue with Facebook"
        imageSource={require("./assets/facebook.png")}
        onPress={() => {}}
        />
        <SocialButton
            text="Continue with Twitter"
            imageSource={require("./assets/twitter.png")}
            onPress={() => {}}
        />
        </LoginScreen>
        </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    fontSize: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
},

parent: {
  borderColor: "#00BFFF",
  flex: 1,
  alignItems: 'center',
  backgroundColor: "white",
},

title: {
  textAlign: 'center',
  color: '#00BFFF',
  fontSize: 100,
  backgroundColor: "white",
  borderWidth: 0,
},

question: {
  textAlign: 'center',
  color: 'grey',
  fontSize: 40,
  backgroundColor: "white",
},
});


export default Login;