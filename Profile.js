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



const pieData = (moods) => {
  console.log("Inside pieData. count=" + moods.length);
  
  const result = [];

  const count = new Set(moods.map(m=>m.word)).size;

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
    console.log('setting color field to ' + convertToHex([rgb[0],rgb[1],rgb[2]]));
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

    const [color1, setColor1] = useState(["#FFFFFF"]);
    const [color2, setColor2] = useState(["#FFFFFF"]);
    const [color3, setColor3] = useState(["#FFFFFF"]);
    const [color4, setColor4] = useState(["#FFFFFF"]);
    const [color5, setColor5] = useState(["#FFFFFF"]);
    const [color6, setColor6] = useState(["#FFFFFF"]);
    const [color7, setColor7] = useState(["#FFFFFF"]);
    const [color8, setColor8] = useState(["#FFFFFF"]);


  const navigation = useNavigation();  

  checkUserLogin(navigation)

  const imgSrc = avatar() + item.email + '.jpg';

  async function fetchData() {
    try {
      
      const url = 'http://feel-databytes.herokuapp.com/moodsforuserlastweek/' + item.email; 
      console.log('the url=' + url);
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
      console.log('The number of moods is ' + data.length);
      const color = getAverageColor(data);
      setAverageColor(color);
      setPie(pieData(data));

      const colors = data.map(function(m) {return convertToHex([m.red,m.green,m.blue])})
      
      if (colors[0] != undefined) {
        setColor1(colors[0]);
      } else {
        setColor1("#FFFFFF")
      }
      if (colors[1] != undefined) {
        setColor2(colors[1]);
      } else {
        setColor2("#FFFFFF")
      }
      if (colors[2] != undefined) {
        setColor3(colors[2]);
      } else {
        setColor3("#FFFFFF")
      }
      if (colors[3] != undefined) {
        setColor4(colors[3]);
      } else {
        setColor4("#FFFFFF")
      }
      if (colors[4] != undefined) {
        setColor5(colors[4]);
      } else {
        setColor5("#FFFFFF")
      }
      if (colors[5] != undefined) {
        setColor6(colors[5]);
      } else {
        setColor6("#FFFFFF")
      }
      if (colors[6] != undefined) {
        setColor7(colors[6]);
      } else {
        setColor7("#FFFFFF")
      }
      if (colors[7] != undefined) {
        setColor8(colors[7]);
      } else {
        setColor8("#FFFFFF")
      }
      
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
      cy="81"
      rx="110"
      ry="110"
      fx="150"
      fy="65"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset="0" stopColor={color1} stopOpacity="1" />
      <Stop offset="0.1" stopColor={color2} stopOpacity="1" />
      <Stop offset="0.2" stopColor={color3} stopOpacity="1" />
      <Stop offset="0.4" stopColor={color4} stopOpacity=".9" />
      <Stop offset="0.5" stopColor={color5} stopOpacity="1" />
      <Stop offset="0.8" stopColor={color6} stopOpacity="1" />
      <Stop offset="0.9" stopColor={color7} stopOpacity="1" />
      <Stop offset="1" stopColor={color8} stopOpacity="1" />
    </RadialGradient>
  </Defs>
  <Circle  width={200} height={200} cx="150" cy="75" r="75" fill="url(#grad)" />
</Svg>


</SafeAreaView>
    </>
    
  );
};




export default Profile;
