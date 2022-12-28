import React, {useRef} from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import {View, FlatList, StyleSheet, StatusBar } from 'react-native';

const list = [
    { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
    { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
    { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
    { name: 'Ali', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
    { name: 'Abu', status: 'Active', time: '8:11 PM', date: '1 Jan 2018' },
    { name: 'Fitri', status: 'Active', time: '8:20 PM', date: '1 Jan 2018' },
    { name: 'Armi', status: 'Active', time: '8:33 PM', date: '1 Jan 2018' },
    { name: 'Eidit', status: 'Active', time: '9:10 PM', date: '1 Jan 2018' },
    { name: 'Hamdan', status: 'Active', time: '10:10 PM', date: '1 Jan 2018' },
    {
      name: 'Muhyiddeen',
      status: 'Blocked',
      time: '10:10 PM',
      date: '9 Feb 2018',
    },
  ];
  
  const FeedScreen = () => {
    const ref = useRef();
    const renderItem = ({item, index}) => {
      const data = item.cleanData ? item.cleanData : item;
  
      console.log('item (if search bar is not empty and prop highlightColor is not empty, item will contains extra data to enable highlight feature)', item);
      console.log('cleanData (if search bar is not empty and prop highlightColor is not empty, cleanData will contain original data structure without extra data)', item.cleanData);
  
  
      console.log('this is index number : ' + index);
  
      console.log(data + ' this is original data');
  
      return <Text>{item.name}</Text>;
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <CompleteFlatList style={styles.container}
          searchKey={['name', 'status', 'time', 'date']}
          pullToRefreshCallback={() => console.log('refreshing')}
          data={list}
          // renderSeparator={null}
          ref={ref}
          highlightColor="yellow"
          renderItem={renderItem}
        />
        <TouchableOpacity onPress={() => ref.current.clearSearch()} style={styles.container}>
          <Text>Clear Search</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default FeedScreen;
  
  