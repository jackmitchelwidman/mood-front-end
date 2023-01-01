import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import LoginScreen from "react-native-login-screen";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
    <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MOOD</Text>
      <Text style={styles.question}>How do you feel?</Text>
      <LoginScreen
        onLoginPress={() => { navigation.navigate('HomeScreen')}}
        onSignupPress={() => { navigation.navigate('RegisterScreen')}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
        disableSocialButtons={true}
        loginButtonText={"Sign up"}
        disableSignup={true}
        
      />
      </>
      
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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

export default RegisterScreen;