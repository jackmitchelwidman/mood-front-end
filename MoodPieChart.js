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
import getSessionUserValue from './SecurityCheck';
import { useFocusEffect } from '@react-navigation/native';


const pieData = (moods) => {
  console.log("Inside pieData")
  const result = [];
  moods = moods.splice(0,10)
  const count = moods.length
  const factor = Math.round(100/count);
  let usedWords = []
  for (let mood of moods) {
      if (!usedWords.includes(mood.word)) {
        let pd ={};
        const rgb = getDefaultColorFromMood(mood);
        pd['color'] = convertToHex([rgb[0],rgb[1],rgb[2]]);
        pd['word'] = mood.word
        usedWords.push(mood.word)
        result.push(pd)
      }
    }
  
  for (let pd of result) {
    const c = moods.filter(function(m){ return (pd.word==m.word)}).length;
    pd['count'] = c * factor  
  } 

return result 
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

const MoodPieChart = () => {

    //const { item } = route.params;
    //const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
    //const moodColor = color(rgbColor).hex().toString(); 
    const [data, setData] = useState([]);
    const [pie, setPie] = useState([]);
    const [email, setEmail] = useState(null);

    const navigation = useNavigation();  
    
    getSessionUserValue().then(value => {
      setEmail(value)
    })

    useFocusEffect(
      React.useCallback(() => {
        fetchData(email);
        return () => {
          // cleanup
        };
      }, [email])
    );

  const imgSrc = avatar() + email + '.jpg';

  async function fetchData(email) {
    try {
      
      const url = 'http://feel-databytes.herokuapp.com/moodsforuserlastweek/' + email; 
      
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
      
      setPie(pieData(data));

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <SafeAreaView style={styles.container}>
        
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <PieChart
            data={pie}  
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height/2}
            chartConfig={{
                color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft={Dimensions.get('window').width/4}
            hasLegend={false}
            absolute
            
            />
        </View>
       </SafeAreaView>
    </>
    
  );
};




export default MoodPieChart;
