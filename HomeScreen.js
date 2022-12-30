import React from 'react';
import {TouchableOpacity, TabView,Text} from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-complete-flatlist';

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import RoundButton from "./RoundButton"
import { Button } from '@rneui/themed';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  //Button,
  Alert,
} from 'react-native';

async function getFeels(db) {
  const feelsCol = collection(db, 'feels');
  const feelSnapshot = await getDocs(feelsCol);
  const feelList = feelSnapshot.docs.map(doc => doc.data());
  return feelList;
}

async function test() {
  try {
    Alert.alert('inside test')
    const snapshot = await collection(db,'feels').get();
    Alert.alert('after snapshot')
    snapshot.forEach((doc) => {
      Alert.alert('another row')
    console.log(doc.id, '=>', doc.data());
    });
  } catch { error => 
    console.log('error is ' + error)
  }
}

const HomeScreen = () => {
  
  const [feels, setFeels] = useState([]);
  const navigation = useNavigation();
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MOOD</Text>
      <Text style={styles.question}>How do you feel?</Text>
      <SafeAreaView style={styles.container}>
      
        <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonExcellent} onPress={() => Alert.alert('EXCELLENT')}>
           <Text style={styles.buttontext}>Ecstatic</Text>
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonHappy} onPress={() => navigation.navigate('FeedScreen')}>
          <Text style={styles.buttontext}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOK}>
          <Text style={styles.buttontext}>OK</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonBlah}>
          <Text style={styles.buttontext}>Blah</Text>  
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSad}>
          <Text style={styles.buttontext}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAngry}>
          <Text style={styles.buttontext}>Sucky</Text>
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

buttontext: {
  textAlign: 'center',
  color: 'grey',
  fontWeight: 'bold',
  fontSize: 20,
},
  buttonHappy: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 1,
    backgroundColor: "#61dafb",
    width: 100,
    height: 100,
    margin: 20,
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
    borderWidth: 2,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
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
  buttonExcellent: {
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


export default HomeScreen;