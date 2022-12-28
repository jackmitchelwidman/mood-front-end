import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-complete-flatlist';

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
//import {Input, Button} from 'react-native-elements';
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
          <View style={styles.button}>
            
            <Button style={styles.button2}
                 title="EXCELLENT" 
                 titleStyle={{
                  color: "blue",
                  fontSize: 28,
                  fontWeight: "bold",
              }}
                 
                 onPress={
                   
                  () => {
                    
                    Alert.alert('EXCELLENT!')
                  
                }
                 
                  
                 
                 } >
                   <Button style={styles.button2}
                 title="MOODS" 
                 titleStyle={{
                  color: "blue",
                  fontSize: 28,
                  fontWeight: "bold",
              }}
                 
              onPress={() => navigation.navigate('FeedScreen')
              
            } >
            </Button>
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              title="FINE"
              
              titleStyle={{
                color: "lightgreen",
                fontSize: 28,
                fontWeight: "bold",
            }}
              onPress={() => Alert.alert('Hello')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="MEH"
              titleStyle={{
                color: "yellow",
                fontSize: 28,
                fontWeight: "bold",
            }}
              //color="yellow"
              
              onPress={() => Alert.alert('Hello')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="YUCKY"
              titleStyle={{
                color: "orange",
                fontSize: 28,
                fontWeight: "bold",
            }}
              //color="orange"
              
              onPress={() => Alert.alert('Hello')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="SHITTY"
              titleStyle={{
                color: "darkorange",
                fontSize: 28,
                fontWeight: "bold",
            }}
              //color="orange"
              
              onPress={() => Alert.alert('Hello')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="PISSED"
              titleStyle={{
                color: "red",
                fontSize: 28,
                fontWeight: "bold",
            }}
              //color="red"
              
              onPress={() => Alert.alert('Hello')}
            />
          </View>
          
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
    backgroundColor: "purple",
  },
  parent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "turquoise",
    borderRadius: 40
  },
  button2: {
    borderRadius: 700,
  },
  button: {
    margin: 20,
    borderColor: "black",
    backgroundColor: "lightblue",
    borderWidth: 1,
    width: 220,
    height: 60,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial"
    //borderRadius: 100
    
    
    
  },
});

export default HomeScreen;