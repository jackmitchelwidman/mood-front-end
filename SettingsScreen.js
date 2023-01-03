import React, { useState } from 'react';
import {View, Text, TextInput, Button, StatusBar,  StyleSheet, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { logout } from './HomeScreen';


const SettingsScreen = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation(); 

    return (
      <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MOOD</Text>
      <Text style={styles.question}>How do you feel?</Text>
      <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        secureTextEntry
        placeholder="Enter new password"
        value={password}
        onChangeText={setPassword}
        style={styles.password}
      />
      
      <TextInput
        secureTextEntry
        placeholder="Confirm new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.password}
      />
      <Button title="Reset Password" onPress={() => Alert.alert('tbd')} style={{marginTop: '30px'}}/>
    </View>
    <View>
      <Button title="logout" onPress={() => logout(navigation)}/>
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

export default SettingsScreen;
