import { View, Text, Dimensions, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit';
import Header from './Header';

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

function MoodPieChart() {
    return (
      <>
      <StatusBar barStyle="light-content" style={{backgroundColor: 'white'}} />
        <Header/>
       
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
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
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    fontSize: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
},

parent: {
  borderColor: "#00BFFF",
  flex: 1,
  alignItems: 'center',
  backgroundColor: "white",
},

title: {
  textAlign: 'center',
  color: '#00BFFF',
  fontSize: 100,
  backgroundColor: "white",
  borderWidth: 0,
},

question: {
  textAlign: 'center',
  color: 'grey',
  fontSize: 40,
  backgroundColor: "white",
},
});

export default MoodPieChart;