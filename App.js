import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-complete-flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from '@rneui/themed';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import HomeScreen from "./HomeScreen"
import FeedScreen from "./FeedScreen"


import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  //Button,
  Alert,
} from 'react-native';
import { fonts } from '@rneui/base';


const App = () => {
  
  const [feels, setFeels] = useState([]);
  const Stack = createStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.container}
          name="Home"
          component={HomeScreen}
          options={{title: 'How are you feeling?', headerTitleStyle: { fontSize: 32 },}
          
        }
        />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    fontWeight: 'bold',
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

export default App;