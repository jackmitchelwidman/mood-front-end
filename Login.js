import React from 'react';
import {Button, View, TextInput, Text, Alert, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StatusBar,
  StyleSheet,
 } from 'react-native';
import axios from 'axios';
import Header from './Header';
import styles from './MoodStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



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
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
     <SafeAreaView style={styles.container}>
      <View style={styles.inputboxes_container}>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={styles.password}
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
    </SafeAreaView>
    </KeyboardAwareScrollView>
    </>
    );
  

};
  
export default Login;