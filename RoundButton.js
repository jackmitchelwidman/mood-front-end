import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ onPress, title }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default RoundButton;
