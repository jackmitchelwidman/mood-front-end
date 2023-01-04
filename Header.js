import {View, Image, Text, StyleSheet} from 'react-native';


const Header = () => {

return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
    <Image source={require('./assets/moodlogo.png')} style={{ width: '100%', height:'40%'}} />

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
        marginTop: 20,
      },
})

export default Header;