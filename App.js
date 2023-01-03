import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-complete-flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
import SettingsScreen from './SettingsScreen';


function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}


const App = () => {
  
  const [feels, setFeels] = useState([]);
  
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
 
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen style={styles.container}
          name="Home"
          component={HomeScreen}
        />
        
        <Tab.Screen name="Data" component={PieChart} 
          options={{ title: 'Data' }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />  
        <Tab.Screen name="Login" component={Login} options={{ tabBarVisible: false }}/>
        </Tab.Navigator>
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