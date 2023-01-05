import React from 'react';
import {TouchableOpacity, StyleSheet, View,  Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';



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
      
      <Header />
      
      
        <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('Good')}>
          <Image source={require('./assets/good.png')} style={{ width: '100%', height:'100%'}} />
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonBasic} onPress={() => navigation.navigate('FeedScreen')}>
          <Image source={require('./assets/neutral.png')} style={{ width: '100%', height:'100%'}} />
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.buttonBasic}>
          <Image source={require('./assets/bad.png')} style={{ width: '100%', height:'100%'}} />
          </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
    

  },

parent: {
  borderWidth: 0,
  borderColor: "#00BFFF",
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'white',
  flexDirection: "row",
  justifyContent: 'space-around'

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
  
  buttonBasic: {
    //borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 120,
    height: 120,

    // shadowColor: 'black',
    // shadowOffset: { width: 3, height: 3},
    // shadowOpacity: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default HomeScreen;