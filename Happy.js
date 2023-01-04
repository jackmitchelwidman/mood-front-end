import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './Header'




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

const Happy = () => {

  const navigation = useNavigation();  

  checkUserLogin(navigation)
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header/>
      
      <SafeAreaView style={styles.container}>
      
        <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBasic} onPress={() => logout(navigation)}>
          
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('Globe')}>
          
          
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBasic}>
          
          </TouchableOpacity>
          </View>
          <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('BezierLineChart')}>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBasic}>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBasic}>
          
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
  color: 'black',
  fontWeight: 'bold',
  fontSize: 20,
  borderWidth:  0 ,
  
  
  
  
  
  
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
   
    
    
    
  },

  
});


export default Happy;