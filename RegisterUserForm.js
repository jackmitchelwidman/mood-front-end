import {View, StatusBar, TextInput, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


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
       <Header/>
       <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
      <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.email}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.email}
      />
      <TextInput
        placeholder="Email"
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
      
      <TextInput
        secureTextEntry
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.password}
      />
      <Button title="Register" onPress={() => register('mood', firstName, lastName, email, password, now, navigation)} style={{marginTop: '30px'}}/>
    </View>
    
    </KeyboardAwareScrollView>
   
        
        </>
    )
}

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
        marginTop: 5
    },
  
    email: {
      color: '#00BFFF',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth:  1 ,
      borderColor: 'lightgrey',
      width: "80%",
      height: 40,
      marginTop: 5, 
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
    
export default RegisterUserForm;


    