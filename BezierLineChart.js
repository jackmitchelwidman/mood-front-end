import { View, SafeAreaView, Dimensions, StyleSheet, StatusBar } from 'react-native'
import React, {useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { getPositionFromMood } from './DefaultColors';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import getSessionUserValue from './SecurityCheck';
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';



const BezierLineChart = () =>  {

    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([])
    const [email, setEmail] = useState("");

    const navigation = useNavigation();  
    
    getSessionUserValue().then(value => {
      setEmail(value)
    })

    useFocusEffect(
      React.useCallback(() => {
        fetchData(email);
        return () => {
          // cleanup
        };
      }, [email])
    );

   

  async function fetchData(email) {
    try {
      
      if (email == "") return []
      const url = 'http://feel-databytes.herokuapp.com/moodsforuserlastweek/' + email; 
      const response = await axios.get(url);
      const data = await response.data;
      
      setData(data.map(mood => getPositionFromMood(mood)));
     
    } catch(e) {console.log(e)}
  }

    return (
      <>
      <StatusBar barStyle="light-content" />
      <Header />
      <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      
  <LineChart
    data={{
      labels: [1,2,3,4,5,6,7,8,9,10],
      datasets: [
        {
          data: data
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
</SafeAreaView>
        
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