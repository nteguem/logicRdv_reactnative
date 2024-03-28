import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from './colors';

const CustomText = ({ children, fontSize, fontWeight, color, style, numberOfLines }) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const styles = StyleSheet.create({
    regularTextStyle: {
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color || colors.black,
      // fontFamily: 'Montserrat-Regular',
      textAlign: 'left',
    },
  });
  return (
    <Text style={[styles.regularTextStyle, { ...passedStyles }]} numberOfLines={numberOfLines} ellipsizeMode="tail">{children}</Text>
  );
};

export default CustomText;
