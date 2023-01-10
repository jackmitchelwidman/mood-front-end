import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
  
  import React from 'react';
  import { View, StyleSheet } from 'react-native';

  const Draw = () => {
      return (
        <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
     
<Svg height="300" width="300">
  <Defs>
    <RadialGradient
      id="grad"
      cx="150"
      cy="75"
      rx="85"
      ry="155"
      fx="150"
      fy="15"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset="10%" stopColor="white" stopOpacity="1" />
      <Stop offset="20%" stopColor="red" stopOpacity="1" />
      <Stop offset="30%" stopColor="blue" stopOpacity="1" />
      <Stop offset="40%" stopColor="green" stopOpacity="1" />
      <Stop offset="50%" stopColor="pink" stopOpacity="1" />
      <Stop offset="60%" stopColor="red" stopOpacity="1" />
      <Stop offset="70%" stopColor="yellow" stopOpacity="1" />
      <Stop offset="80%" stopColor="green" stopOpacity="1" />
    </RadialGradient>
  </Defs>
  <Circle cx="150" cy="75" r="75" fill="url(#grad)" />
</Svg>

      </View>
      );
  }

  export default Draw;