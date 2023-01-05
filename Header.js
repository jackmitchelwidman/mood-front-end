import {View, Image, Text, StyleSheet, StatusBar} from 'react-native';


const Header = () => {

return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
    <StatusBar barStyle="light-content" style={{backgroundColor: 'white'}} />
    <Image source={require('./assets/moodlogo.png')} resizeMode={"contain"} cache={true} style={{ width: '95%', height: '40%'}} />

    <Text style={styles.question}>How do you feel?</Text>
</View>
 );
}

const styles = StyleSheet.create({
    question: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 40,
        backgroundColor: "white",
        marginTop: 0,
      },
})

export default Header;