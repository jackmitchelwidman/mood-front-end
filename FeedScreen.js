import React, {useRef} from 'react';
import { Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList, StyleSheet, StatusBar } from 'react-native';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

  

const FeedScreen = () => {

    const [data, setData] = useState(null);

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
      return <Text style={styles.title}>{item.name}</Text>;
    };
  
    return (
      <>
      <Header/>
      <SafeAreaView style={styles.container}>
      
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
    </>
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
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 6,
      backgroundColor: "whitte",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  

  export default FeedScreen;
  
  