import { styleSheets } from 'min-document';
import {StyleSheet} from 'react-native';


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

    column : {
      flexBasis: '33.33%',
      textAlign:'left'
    },

    list : {
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: 'wrap'
    },

    separator: {
      height: 20,
      backgroundColor: 'white',
      borderWidth: 0
    },
  
  parent: {
    borderWidth: 0,
    borderColor: "#00BFFF",
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: 'center'
  
  },
  title: {
    textAlign: 'center',
    color: '#grey',
    fontSize: 20,
    backgroundColor: "white",
  },
  
  question: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 40,
    backgroundColor: "white",
  },
  
  buttontext: {
    color: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth:  0 ,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: "white",
  },
    
    buttonBasic: {
      //borderRadius: 100,
      borderColor: "lightgrey",
      borderWidth: 0,
      backgroundColor: "white",
      width: 120,
      height: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    password: {
        color: '#00BFFF',
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth:  1 ,
        borderColor: 'lightgrey',
        width: "80%",
        height: 40,
        marginTop: 30 
    },
  
    email: {
      color: '#00BFFF',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth:  1 ,
      borderColor: 'lightgrey',
      width: "80%",
      height: 40,
      marginTop: '60%', 
  },

  inputboxes_container: { 
      backgroundColor: 'white', 
      justifyContent: 'in-between', 
      alignItems: 'center',
      width: '70%' 
    },

    horizontal_elements: {
        flexDirection: 'row'
    }
      
  });

  export default styles;