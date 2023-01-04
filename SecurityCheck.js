
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


async function getSessionUserValue(navigation) {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value === null) {
        navigation.navigate('Login')
      } else {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  export default getSessionUserValue;   