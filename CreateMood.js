import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';


async function createMood(word, email, description, red, green, blue, created, navigation) {
    const url = 'http://feel-databytes.herokuapp.com/add';
    
    await axios.post(url, {
      word: word,
      email: email,
      description: description,
      red:    red,
      green: green,
      blue: blue,
      created: created
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => { 
    console.log('Response: ' + response.data)  
    navigation.navigate('FeedScreen');
    }).catch(error=>console.log('Error: ' + error))
}

export default createMood;