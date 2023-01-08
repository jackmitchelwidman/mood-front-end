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
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <Image style={styles.column} source={{ uri: imgSrc }} resizeMode={"contain"} cache={'force-cache'} style={{ width: 150, height:150, borderRadius: 150, borderWidth: 8, borderColor: moodColor}} />
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
      </SafeAreaView>
    </>
    
  );
};




export default Profile;
