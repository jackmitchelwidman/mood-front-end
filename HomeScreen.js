import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  //Button,
  Alert,
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
          <TouchableOpacity style={styles.buttonBasic} onPress={() => logout(navigation)}>
           <Text style={styles.buttontext}>happy</Text>
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('FeedScreen')}>
            <Text style={styles.buttontext}>sad</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.buttonBasic}>
          <Text style={styles.buttontext}>fear</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('BezierLineChart')}>
          <Text style={styles.buttontext}>anger</Text>   
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBasic}>
          <Text style={styles.buttontext} onPress={() => navigation.navigate('ColorKey')}>disgust</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBasic}>
          <Text style={styles.buttontext} onPress={() => navigation.navigate('PieChart')}>surprise</Text>
          </TouchableOpacity>
          
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
    marginBottom: 20
    

  },

parent: {
  borderWidth: 0,
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
},

question: {
  textAlign: 'center',
  color: 'grey',
  fontSize: 40,
  backgroundColor: "white",
},

buttontext: {
  color: 'lightgrey',
  fontWeight: 'bold',
  fontSize: 20,
  borderWidth:  0 ,
  textAlign: 'center',
  textAlignVertical: 'center',
  backgroundColor: "white",
},
  buttonHappy: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderStyle: "solid 1",
    backgroundColor: "#61dafb",
    width: 100,
    height: 100,
     shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
   
    
    
    
  },

  buttonAngry: {
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
  buttonSad: {
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
  buttonBlah: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    display: 'flex'
  },
  buttonOK: {
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
  buttonHappy: {
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
  buttonBasic: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default HomeScreen;