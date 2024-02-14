import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Regulartext = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text style={[styles.bigTextStyle, {...passedStyles}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  regularTextStyle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
  },
});

export default Regulartext;
