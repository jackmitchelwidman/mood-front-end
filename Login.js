import React from 'react';
import {SafeAreaView, View, TextInput, Text, Alert} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StatusBar,
  StyleSheet,
 } from 'react-native';
import axios from 'axios';
import Header from './Header'



async function login(email,password, navigation) {
  const url = 'http://feel-databytes.herokuapp.com/login';
  await axios.post(url, {
    email: email,
    password: password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
.then(response => {
if (response.data=='false') {
  Alert.alert('wrong password')
  return;
}   
  AsyncStorage.setItem("user", email).then(
    navigation.navigate('HomeScreen')
  ).catch(error => console.log('ERROR' + error))
  })
}

const Login = () => {
  
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
    <>
      <StatusBar barStyle="light-content" style={{backgroundColor: 'white'}}/>
      <Header/>
     
      <View style={{ backgroundColor: 'white', justifyContent: 'in-between', alignItems: 'center' }}>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={styles.email}
      />
      
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.password}
      />
      
      
      <Button title="Login" onPress={() => login(email,password, navigation).then().catch(error => console.log(error))} style={{marginTop: 30}}/>
      
      <Button title="Register" onPress={() => navigation.navigate('RegisterUserForm')} style={{marginTop: 30}}/>
    </View>
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
      flexDirection: "column",
      justifyContent: "center",
      },
      
    parent: {
      borderWidth: 1,
      borderColor: "#00BFFF",
      flex: 1,
      alignItems: 'center'
    
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
    buttonText: {
      color: '#00BFFF',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth:  0 ,
  },
  password: {
      color: '#00BFFF',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth:  1 ,
      borderColor: 'lightgrey',
      width: "80%",
      height: 40,
      marginTop: 30 
  },

  email: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth:  1 ,
    borderColor: 'lightgrey',
    width: "80%",
    height: 40,
    marginTop: '60%', 
},
    
 
     buttonCircular: {
      borderRadius: 100,
      borderColor: "lightgrey",
      borderWidth: 2,
      backgroundColor: "white",
      width: 100,
      height: 100,
      margin: 20,
      shadowColor: 'black',
      shadowOffset: { width: 3, height: 3},
      shadowOpacity: 0.5,
      
      
    },
});
  

export default Login;