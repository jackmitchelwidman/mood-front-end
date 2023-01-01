import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

function DisplayMoodRing() {
  const red = 130;
  const green = 30;
  const blue = 100;

  const red2 = 0;
  const green2 = 100;
  const blue2 = 0;

  const red3 = 0;
  const green3 = 0;
  const blue3 = 255;

  return (
<View
    style={{ 
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 10,
        borderWidth: 1,
        width: '100%',
        
        backgroundColor: 'white'
    }}
>


<View style={{ flexDirection: 'row', alignContent: 'center', top: 10 }}>
    <Text style={styles.title}>   MOOD</Text>
    
</View>


<View style={{ flexDirection: 'row', justifyContent: 'space-between', align: 'center', top: '15%'}}>
      <Text style={styles.text}>Today</Text>
      <Text style={styles.text}>One Week</Text>
      <Text style={styles.text}>One Month</Text>
</View>

    
<SafeAreaView
    style={{ 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItemsVertical: 'center',
        top: '20%',
        marginBottom: 20,
        borderWidth: 0
    }}
    >
        
    
    <View
      style={{
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 0,
        //flexDirection: 'row',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 3, height: 3},
        shadowOpacity: 0.5,
        opacity: 0.80

      }}
    />
     <View
      style={{
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: `rgb(${red2}, ${green2}, ${blue2})`,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 3, height: 3},
        shadowOpacity: 0.5,
        opacity: 0.80

      }}
    />
    <View
      style={{
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: `rgb(${red3}, ${green3}, ${blue3})`,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 3, height: 3},
        shadowOpacity: 0.5,
        opacity: 0.80,
        display: 'flex',
        alignItemsVertical: 'center',
        
      }}
    />
    
    </SafeAreaView>
    </View>
    
  );
}

const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            flex: 1,
            borderWidth: 0,
            textAlign: 'center',
            
            
                
        },title: {
            textAlign: 'center',
            color: '#00BFFF',
            fontSize: 100,
            backgroundColor: "white",
          },
    });



export default DisplayMoodRing