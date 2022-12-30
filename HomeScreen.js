import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <TouchableOpacity style={styles.buttonExcellent} onPress={() => Alert.alert('EXCELLENT')}>
           
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonHappy} onPress={() => navigation.navigate('FeedScreen')}>
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOK}>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlah}>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSad}>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAngry}>
           
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
    fontSize: 60,
    backgroundColor: "white",
  },
  parent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 200,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  
    
  },
  buttonHappy: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 0,
    backgroundColor: "#61dafb",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    justifyContent: 'center',
  },

  //style={{ shadowColor: 'black', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.5 }}>


  buttonAngry: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#DC143C",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonSad: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "darkgray",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonBlah: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "orange",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonOK: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#FFF36D",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonHappy: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#98FB98",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonExcellent: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#61dafb",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
});


export default HomeScreen;