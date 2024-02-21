import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({children, fontSize, fontWeight, color, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  const styles = StyleSheet.create({
    regularTextStyle: {
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color,
      fontFamily: 'Montserrat-Regular',
      textAlign: 'left',
    },
  });
  return (
    <Text style={[styles.regularTextStyle, {...passedStyles}]}>{children}</Text>
  );
};

export default CustomText;
