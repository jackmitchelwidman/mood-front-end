import {View, SafeAreaView, StatusBar, TextInput, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import styles from './MoodStyles';
import logout from './HomeScreen';


async function register(userName, firstName, lastName,email, password, joined, navigation) {
    const url = 'http://feel-databytes.herokuapp.com/adduser';
    
    await axios.post(url, {
      username: userName,
      firstname: firstName,
      lastname: lastName,
      email:    email,
      password: password,
      joined: joined
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

const RegisterUserForm = () => {
    var isoString = new Date().toISOString();

    // Extract the parts of the ISO string that we need
    const year = isoString.substring(0, 4);
    const month = isoString.substring(5, 7);
    const day = isoString.substring(8, 10);
    const time = isoString.substring(11, 19);

    // Concatenate the parts into the desired format
    var now = year + "-" + month + "-" + day + " " + time;
   
const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation(); 

    return (
        <>
       <StatusBar barStyle="light-content" style={{backgroundColor: 'white'}}/>
      <Header/>
      <SafeAreaView style={styles.container}>
      <View style={styles.inputboxes_container}>
      
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.password}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.password}
      />
      <TextInput
        placeholder="Email"
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
      
      <TextInput
        secureTextEntry
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.password}
      />
       <Button title="Register" onPress={() => register('mood', firstName, lastName, email, password, now, navigation)} style={{marginTop: '30px'}}/>
     </View>
    </SafeAreaView>   
  </>
    )
}
export default RegisterUserForm;


    