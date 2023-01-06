import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ onPress, title, moodColor }) => (
  <TouchableOpacity
  style={[{ backgroundColor: moodColor, width: 50, height: 50, borderRadius: 50 }]}
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
    width: 50,
    height: 50
  },
  buttonText: {
    fontSize: 18,
  },
});

export default RoundButton;
