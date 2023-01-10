import React, { useEffect } from 'react';
import {View, Dimensions, SafeAreaView, Image, StatusBar, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import styles from './MoodStyles';
import color from 'color';
import { PieChart } from 'react-native-chart-kit';
import avatar from './ImageManager';
import { useState } from 'react';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {getAverageColor, convertToHex, wordCount } from './MoodDataUtils';
import getDefaultColorFromMood from './DefaultColors';
import Canvas from 'react-native-canvas';
import { useRef } from 'react';
import Svg, {Circle,Defs,RadialGradient, Stop} from 'react-native-svg';


const pieData2 = [
    {
      name: 'Bitcoin',
      population: 63,
      color: '#00BFFF'
    },
    {
      name: 'Dogecoin',
      population: 9,
      color: 'gold'
    },
    {
      name: 'Ethereum',
      population: 19,
      color: 'orange'
    },
    {
      name: 'Tether',
      population: 6,
      color: 'green'
    },
    {
      name: 'Polygon',
      population: 3,
      color: 'red'
    },
];

const pieData = (moods) => {
  console.log('inside pieData');

  const result = [];

  const count = new Set(moods.map(m=>m.word)).size;

  console.log("count=" + count);

  const factor = Math.round(100/count);

  for (let mood of moods) {
    let pd ={};
    if (mood.word in result.map(m=>m.word)) {
      continue;
    }
    pd['word'] = mood.word;

    const c = moods.filter(function(m){ return (mood.word==m.word)}).length;
    pd['count'] = c * factor;

    const rgb = getDefaultColorFromMood(mood);
    console.log("rgb=" + rgb[0] + '. ' + rgb[1] + ', ' + rgb[2])

    pd['color'] = convertToHex([rgb[0],rgb[1],rgb[2]]);

    result.push(pd)
  }
  return result;
  
}


export async function logout(n) {
  AsyncStorage.setItem("user", '').then(
    n.navigate('Login')
  ).catch(error => console.log(error))
}

async function checkUserLogin(n) {
  
  AsyncStorage.getItem('user').then(value => {

    if (value == null) {
      n.navigate('Login');
    } else { return value; }
  }).catch(error => console.log(error));
}



const Profile = ({route}) => {

    const { item } = route.params;
    const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
    const moodColor = color(rgbColor).hex().toString(); 
    const [averageColor, setAverageColor] = useState([255,255,255]);
    const [data, setData] = useState([]);
    const [pie, setPie] = useState([]);

  const navigation = useNavigation();  

  checkUserLogin(navigation)

  const imgSrc = avatar() + item.email + '.jpg';

  ////////////////////////////////////////////////////////////////

 const showMoodRing = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
  }
 /////////////////////////////////////////////////////

  async function fetchData() {
    try {
      console.log('Inside fetchData()')
      const url = 'http://feel-databytes.herokuapp.com/moodsforuserlastweek/' + item.email; 
      console.log('the url=' + url);
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
      console.log('The number of moods is ' + data.length);
      const color = getAverageColor(data);
      setAverageColor(color);
      
      setPie(pieData(data));

      
      
    } catch (error) {
      console.error(error);
    }
  }
  
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <SafeAreaView style={styles.container}>
       
        <Svg height="300" width="300">
  <Defs>
    <RadialGradient
      id="grad"
      cx="150"
      cy="75"
      rx="85"
      ry="155"
      fx="150"
      fy="15"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset="10%" stopColor="white" stopOpacity="1" />
      <Stop offset="20%" stopColor="red" stopOpacity="1" />
      <Stop offset="30%" stopColor="blue" stopOpacity="1" />
      <Stop offset="40%" stopColor="green" stopOpacity="1" />
      <Stop offset="50%" stopColor="pink" stopOpacity="1" />
      <Stop offset="60%" stopColor="purple" stopOpacity="1" />
      <Stop offset="70%" stopColor="yellow" stopOpacity="1" />
      <Stop offset="80%" stopColor="green" stopOpacity="1" />
    </RadialGradient>
  </Defs>
  <Circle  width={200} height={200} cx="150" cy="75" r="75" fill="url(#grad)" />
</Svg>


</SafeAreaView>
    </>
    
  );
};




export default Profile;
