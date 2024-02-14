import React from 'react';
import {StyleSheet, Text} from 'react-native';

const SmallText = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text style={[styles.bigTextStyle, {...passedStyles}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  smallTextStyle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
  },
});

export default SmallText;
