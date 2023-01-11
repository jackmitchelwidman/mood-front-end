import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import getDefaultColorFromMood from './DefaultColors';
import createMood from './CreateMood';

const Mood = ({word, email, created, navigation}) => {
    return (
        <TouchableOpacity style={styles.buttonBasic} onPress={() => {
            const colors = getDefaultColorFromMood({word: word, email: email, created: created })
            createMood(word, email, 'This is a description', colors[0], colors[1], colors[2], created, navigation)
            }
          }>
          <Text style={styles.buttontext}>{word}</Text>
        </TouchableOpacity>
    )
}

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
    borderWidth: 0,
    borderColor: "#00BFFF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  
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
    color: 'black5',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth:  0 ,
    marginTop: 5,
    marginBottom: 5,
  },
    buttonBasic: {
      borderRadius: 110,
      borderColor: "lightgrey",
      borderStyle: "solid 1",
      backgroundColor: "white",
      width: 110,
      height: 110,
       shadowColor: '',
      shadowOffset: { width: 3, height: 3},
      shadowOpacity: 0.5,
      marginTop: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     },
  });
  

export default Mood;