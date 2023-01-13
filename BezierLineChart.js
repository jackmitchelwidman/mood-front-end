import { View, Text, Dimensions, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit';
import { getPositionFromMood } from './DefaultColors'

function BezierLineChart() {
    return (
      <>
      <StatusBar barStyle="light-content" />
        <Text style={styles.title}>MOOD</Text>
        <Text style={styles.question}>How do you feel?</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      
  <LineChart
    data={{
      labels: ["Good", "Neutral", "Bad"],
      datasets: [
        {
          data: [1,3,2,1,3,1,1,2]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""  //before number on y axis
    yAxisSuffix="" //after number on y axis
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(55, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
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

export default BezierLineChart;