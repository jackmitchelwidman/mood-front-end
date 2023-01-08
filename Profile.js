import React from 'react';
import {Dimensions, SafeAreaView, Image, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import styles from './MoodStyles';
import color from 'color';
import { PieChart } from 'react-native-chart-kit';
import avatar from './ImageManager';
import getAverageColor from './MoodDataUtils';

const pieData = [
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


export async function logout(n) {
  AsyncStorage.setItem("user", '').then(
    n.navigate('Login')
  ).catch(error => console.log(error))
}

async function checkUserLogin(n) {
  
  AsyncStorage.getItem('user').then(value => {

    if (value == null) {
      n.navigate('Login');
    }
  }).catch(error => console.log(error));
}

const Profile = ({route}) => {

    const { item } = route.params;
    const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
    const moodColor = color(rgbColor).hex().toString(); 

  const navigation = useNavigation();  

  checkUserLogin(navigation)

  const imgSrc = avatar() + item.email + '.jpg';
  console.log('imgSrc=' + imgSrc);
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <Image style={styles.column} source={{ uri: imgSrc }} resizeMode={"contain"} cache={'force-cache'} style={{ width: 150, height:150, borderRadius: 150, borderWidth: 8, borderColor: moodColor}} />
        <PieChart
            data={pieData}  
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height/2}
            chartConfig={{
                color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
            }}
            accessor="population"
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
