import React from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ColorKey = () => {

  const navigation = useNavigation();  

  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MOOD</Text>
      <Text style={styles.question}>How do you feel?</Text>
      
      <SafeAreaView style={styles.container}>
        <View>
        
           <Text style={styles.buttonExcellent}>Ecstatic</Text>
        
        
           <Text style={styles.buttonHappy}>Happy</Text>
       
       
           <Text style={styles.buttonOK}>OK</Text>
       </View>
       <View>
       
           <Text style={styles.buttonBlah}>Blah</Text>
       
       
           <Text style={styles.buttonSad}>Sad</Text>
       
           <Text style={styles.buttonAngry}>Angry</Text>
       
        </View>
          
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

parent: {
  borderWidth: 1,
  borderColor: "#00BFFF",
  flex: 1,
  alignItems: 'center'

},
title: {
  textAlign: 'center',
  color: '#00BFFF',
  fontSize: 100,
  backgroundColor: "white",
},

question: {
  textAlign: 'center',
  color: 'grey',
  fontSize: 40,
  backgroundColor: "white",
},

buttontext: {
  color: '#00BFFF',
  fontWeight: 'bold',
  fontSize: 20,
  borderWidth:  0 ,
  position: 'absolute',
  top: '35%',
  left: '14%',
  
  
  
  
  
},
  buttonHappy: {
    borderRadius: 50,
    borderColor: "lightgrey",
    borderStyle: "solid 1",
    backgroundColor: "#61dafb",
    width: 100,
    height: 100,
     shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
   
    
    
    
  },

  buttonAngry: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    
    
  },
  buttonSad: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonBlah: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    display: 'flex'
  },
  buttonOK: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
    
  },
  buttonHappy: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "orange",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  buttonExcellent: {
    borderRadius: 100,
    borderColor: "lightgrey",
    borderWidth: 0,
    backgroundColor: "00BFFF",
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 0.5
   

  },
});


export default ColorKey;