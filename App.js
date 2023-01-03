import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-complete-flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from '@rneui/themed';


import HomeScreen from "./HomeScreen"
import FeedScreen from "./FeedScreen"
import MoodScreen from "./MoodScreen"
import DisplayMoodRing from "./DisplayMoodRing"
import Login from "./Login"
import ColorKey from "./ColorKey"


import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  //Button,
  Alert,
} from 'react-native';
import { fonts } from '@rneui/base';

import { AsyncStorage } from '@react-native-async-storage/async-storage';
import RegisterScreen from './RegisterScreen';
import Globe from './Globe';
import PieChart from './MoodPieChart';
import BezierLineChart from './BezierLineChart';




const App = () => {
  
  const [feels, setFeels] = useState([]);
  const Stack = createStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.container}
          name="mood"
          component={HomeScreen}
        />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
        <Stack.Screen name="MoodScreen" component={MoodScreen} />
        <Stack.Screen name="DisplayMoodRing" component={DisplayMoodRing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Globe" component={Globe} />
        <Stack.Screen name="PieChart" component={PieChart} 
          options={{ title: 'The Last Week' }}
        />
        <Stack.Screen name="ColorKey" component={ColorKey} 
           options={{ title: 'The Colors' }}
        />
        <Stack.Screen name="BezierLineChart" component={BezierLineChart} 
           options={{ title: 'The Colors' }}
        />
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