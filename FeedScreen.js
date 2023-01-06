import React, {useRef} from 'react';
import { Text, SafeAreaView, Image, Alert} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList } from 'react-native';

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
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    async function fetchData(page, pageSize) {
      try {
        
        const url = 'http://feel-databytes.herokuapp.com/moods/' + page + '/' + pageSize;
        console.log('url=' + url);
        const response = await axios.get(url);
        const data = await response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      
      fetchData(1,10)
    }, []);

    const loadMore = async () => {
      if (loading) return;
      setLoading(true);
      fetchData(page,10)
      //setPage(page + 1);
      setLoading(false);
    }

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
        onMomentumScrollEnd={loadMore}
        pullToRefreshCallback={() => fetchData(1,10)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <LoadingIndicator/> }
       />
      
    </SafeAreaView>
    </>
    );
  };
  
  export default FeedScreen;
  
  