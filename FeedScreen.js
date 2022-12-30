import React, {useRef} from 'react';
import { Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList, StyleSheet, StatusBar } from 'react-native';
//import fetch from 'react-native-fetch-api';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import fetch from 'react-native-community/fetch';


// const list = [
//     { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
//     { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
//     { name: 'Ali', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'Abu', status: 'Active', time: '8:11 PM', date: '1 Jan 2018' },
//     { name: 'Fitri', status: 'Active', time: '8:20 PM', date: '1 Jan 2018' },
//     { name: 'Armi', status: 'Active', time: '8:33 PM', date: '1 Jan 2018' },
//     { name: 'Eidit', status: 'Active', time: '9:10 PM', date: '1 Jan 2018' },
//     { name: 'Hamdan', status: 'Active', time: '10:10 PM', date: '1 Jan 2018' },
//     {
//       name: 'Muhyiddeen',
//       status: 'Blocked',
//       time: '10:10 PM',
//       date: '9 Feb 2018',
//     },
//   ];
  
  const FeedScreen = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
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
      //const data = item.cleanData ? item.cleanData : item;
      return <Text style={styles.title}>{item.name}</Text>;
    };
  
    return (
      <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
    );
  };
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: '20%',
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  

  export default FeedScreen;
  
  