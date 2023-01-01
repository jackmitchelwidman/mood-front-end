import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import LoginScreen from "react-native-login-screen";

const RegisterScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    
      <LoginScreen
        onLoginPress={() => { navigation.navigate('HomeScreen')}}
        onSignupPress={() => { navigation.navigate('RegisterScreen')}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
        disableSocialButtons={true}
        loginButtonText={"Sign up"}
        disableSignup={true}
      />
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RegisterScreen;