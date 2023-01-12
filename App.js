import React from 'react';
import {TouchableOpacity, TabView} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "./HomeScreen"
import FeedScreen from "./FeedScreen"
import Login from "./Login"
import { StyleSheet} from 'react-native';
import SettingsScreen from './SettingsScreen';
import MoodPieChart from './MoodPieChart';
import Good from './Good';
import Neutral from './Neutral';
import Bad from './Bad';
import RegisterUserForm from './RegisterUserForm';
import Profile from './Profile';
import TestSvg from './TestSvg';
import Globe from './Globe';


function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PieChart" component={PieChart} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Login" component={Login} />
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
          name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="MoodPieChart" component={MoodPieChart} 
          options={{ title: 'Data' }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />  
        <Tab.Screen name="Login" component={Login} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Good" component={Good}/>
        <Tab.Screen name="Bad" component={Bad}/>
        <Tab.Screen name="Neutral" component={Neutral}/>
        <Tab.Screen name="RegisterUserForm" component={RegisterUserForm}/>
        <Tab.Screen name="FeedScreen" component={FeedScreen}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="TestSvg" component={TestSvg}/>
        
        
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