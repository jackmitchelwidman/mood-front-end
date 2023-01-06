import React, { useState } from 'react';
import {View, SafeAreaView, TextInput, Button, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from './HomeScreen';
import axios from 'axios';
import Header from './Header';
import getUserSessionValue from './SecurityCheck';
import styles from './MoodStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


async function resetPassword(email, password, navigation) {
  const url = 'http://feel-databytes.herokuapp.com/encryptpassword';
  console.log("email=" + email + ' and password=' + password);
  await axios.post(url, {
    email: email,
    password: password,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
.then(response => { 
  console.log('Response: ' + response.data)  
  navigation.navigate('HomeScreen');
  }).catch(error=>console.log('Error: ' + error))


}
  const SettingsScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  getUserSessionValue().then(value => setEmail(value))
  
  return (
      <>
      <StatusBar barStyle="light-content" />
      
     <Header /> 
     <KeyboardAwareScrollView style={{backgroundColor: 'white'}}> 
      <SafeAreaView style={styles.container}>
      
      <View style={styles.inputboxes_container}>
      <TextInput
        secureTextEntry
        placeholder="new password"
        value={password}
        onChangeText={setPassword}
        style={styles.password}
      />
      
      <TextInput
        secureTextEntry
        placeholder="confirm new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.password}
      />
      <View >
      <Button title="Reset Password" onPress={() => resetPassword(email, password,  navigation)} style={{marginTop: '30px'}}/>
      <Button title="logout" onPress={() => logout(navigation)}/>
      </View>
    </View>
    
      </SafeAreaView>
      
      </KeyboardAwareScrollView>
      
      </>
    );
};


export default SettingsScreen;
