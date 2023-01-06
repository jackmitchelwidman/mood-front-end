import React, {useRef} from 'react';
import { Text, SafeAreaView, Image} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList, StyleSheet, StatusBar } from 'react-native';

import { useState, useEffect } from 'react';
import axios from 'axios';
import RoundButton from './RoundButton';
import Header from './Header';
import color from 'color';
import moment from 'moment';
import 'moment-timezone';



  

const FeedScreen = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          //const url = "https://localhost:9000/moods";
          const url = 'http://feel-databytes.herokuapp.com/moods';
          //const url = 'http://192.168.1.254:9000/moods';
          const response = await axios.get(url);
          const data = await response.data;
          setData(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);

    

    //const ref = useRef();
    const renderItem = ({item}) => {
        const rgbColor = 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')';
        const moodColor = color(rgbColor).hex().toString(); 
        const timezone = '';
        const formattedDate = moment.tz(item.created, timezone).format(); 
        const created = moment(formattedDate).fromNow();


      return (
      <View style={styles.list}>
        <RoundButton style={styles.column} title={''} moodColor={moodColor} showSearch={true} isJelly={true} />
        <Image style={styles.column} source={require('./assets/jack.jpg')} resizeMode={"contain"} cache={true} style={{ width: 50, height:50}} />
        <Text style={styles.column} style={[{ fontSize: 26, marginRight: 20 }]}>{item.word}</Text>
        <Text style={styles.column}>{created}</Text>
        
      </View>
      );
    };
  
    return (
      <>
      <Header/>
      <SafeAreaView style={styles.container}>
        
      
      <CompleteFlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pullToRefreshCallback={() => fetchData()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
       />
      
    </SafeAreaView>
    </>
    );
  };
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      borderWidth: 0,
      fontSize: 60,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "center",
    },

    column : {
      flexBasis: '25.00%',
      textAlign:'left'
    },

    list : {
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: 'wrap'
    },

    separator: {
      height: 20,
      backgroundColor: 'white',
      borderWidth: 0
    },
  
  parent: {
    borderWidth: 0,
    borderColor: "#00BFFF",
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: 'space-around'
  
  },
  title: {
    textAlign: 'center',
    color: '#grey',
    fontSize: 20,
    backgroundColor: "white",
  },
  
  question: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 40,
    backgroundColor: "white",
  },
  
  buttontext: {
    color: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth:  0 ,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: "white",
  },
    
    buttonBasic: {
      //borderRadius: 100,
      borderColor: "lightgrey",
      borderWidth: 0,
      backgroundColor: "white",
      width: 120,
      height: 120,
  
      // shadowColor: 'black',
      // shadowOffset: { width: 3, height: 3},
      // shadowOpacity: 0.5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default FeedScreen;
  
  