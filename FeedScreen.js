import React, {useRef} from 'react';
import { Text, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList, TouchableOpacity } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import color from 'color';
import moment from 'moment';
import 'moment-timezone';
import { StatusBar } from 'expo-status-bar';
import styles from './MoodStyles';
import { NavigationContainer } from '@react-navigation/native';
import avatar from './ImageManager';


const FeedScreen = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [currentMax, setCurrentMax] = useState(-Infinity)
    const navigation = useNavigation();
    
    
    useEffect(() => {
      const newCurrentMax = Math.max.apply(null, data.map(m => m.id))
      setCurrentMax(newCurrentMax)
    }, [data]);

    async function fetchData(page, pageSize) {
      
      try {
        const url = 'http://feel-databytes.herokuapp.com/moods/' + page + '/' + pageSize;
        const response = await axios.get(url);
        const newData = await response.data;
        if (newData.length == 0) return;
        
        const maxIdNew = Math.max.apply(null, newData.map(m=>m.id));
        if  (maxIdNew > currentMax) { 
          setData([...newData.filter(function(n) { 
            return (n.id > currentMax)
          }),...data])
        }  
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
        try {
          const url = 'http://feel-databytes.herokuapp.com/moods/' + (page + 1) + '/' + 10;
          const response = await axios.get(url);
          const newData = await response.data;
          
          setData([...data,...newData.filter(function(m) {!(m.id in data.map(m => m.id))})])
            
        } catch (error) {
          console.error(error);
        }
        setPage(page + 1)
        setLoading(false)
      }

   const renderItem = ({item}) => {
        const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
        const moodColor = color(rgbColor).hex().toString(); 
        const timezone = '';
        const formattedDate = moment.tz(item.created, timezone).format(); 
        const created = moment(formattedDate).fromNow();
        const imgSrc = avatar() + item.email + '.jpg';
        
      return (
      <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Profile', {item: item})}>
        <Image style={styles.column} source={{ uri: imgSrc }} resizeMode={"contain"} cache={'force-cache'} style={{ width: 50, height:50, borderRadius: 50, borderWidth: 8, borderColor: moodColor}} />
        <Text style={styles.column} style={[{ fontColor: moodColor, fontSize: 26, marginRight: 20 }]}>{item.word}</Text>
        <Text style={styles.column}>{created}</Text>
        
      </TouchableOpacity>
      );
    };
  
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
        //ListFooterComponent={loading && <LoadingIndicator/> }
       />
      
    </SafeAreaView>
    </>
    );
  };
  
  export default FeedScreen;
  
  