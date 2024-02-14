import React from 'react';
import {StyleSheet, Text} from 'react-native';

const BigText = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text style={[styles.bigTextStyle, {...passedStyles}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  bigTextStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
  },
});

export default BigText;
