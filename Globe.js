import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import {View, StatusBar, Text, StyleSheet } from "react-native";


function Sphere() {
    return (
      <mesh>
        <sphereGeometry attach="geometry" radius={2}/>
        <meshBasicMaterial attach="material" color={'#00BFFF'} wireframe={true} />
      </mesh>
    );
  }

function Globe() {
      
    return (
        <>
        <View>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>MOOD</Text>
        <Text style={styles.question}>How do you feel?</Text>
        </View>
      <Canvas lights={[ { type: 'ambient', color: '#fff' },
      { type: 'point', color: '#fff', intensity: 1, position: [-10, 0, 10] },
      { type: 'point', color: '#fff', intensity: 1, position: [0, 10, 0] },]}>
        <Sphere/>
      </Canvas>
      </>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      fontSize: 60,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "center",
  },
  
  parent: {
    borderColor: "#00BFFF",
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
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

  export default Globe;