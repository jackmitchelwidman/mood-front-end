import React, {useRef} from 'react';
import { Text, SafeAreaView, Image} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, StyleSheet } from 'react-native';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import color from 'color';
import moment from 'moment';
import 'moment-timezone';
import { StatusBar } from 'expo-status-bar';
import styles from './MoodStyles';

const FeedScreen = () => {

    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false)

    useEffect(() => {
      async function fetchData() {
        try {
          
          const url = 'http://feel-databytes.herokuapp.com/moods';
          const response = await axios.get(url);
          const data = await response.data;
          setData(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);

    
   const renderItem = ({item}) => {
        const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
        const moodColor = color(rgbColor).hex().toString(); 
        const timezone = '';
        const formattedDate = moment.tz(item.created, timezone).format(); 
        const created = moment(formattedDate).fromNow();


      return (
      <View style={styles.list}>
        <Image style={styles.column} source={require('./assets/jack.jpg')} resizeMode={"contain"} cache={'force-cache'} style={{ width: 50, height:50, borderRadius: 50, borderWidth: 8, borderColor: moodColor}} />
        <Text style={styles.column} style={[{ fontColor: moodColor, fontSize: 26, marginRight: 20 }]}>{item.word}</Text>
        <Text style={styles.column}>{created}</Text>
        
      </View>
      );
    };
  25
    return (
      <>
      <StatusBar/>
      <Header/>
      <SafeAreaView style={styles.container}>
        
      
      <CompleteFlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pullToRefreshCallback={() => setLoad(true)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
       />
      
    </SafeAreaView>
    </>
    );
  };
  
  export default FeedScreen;
  
  