import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from './colors';

const CustomAppButton = ({
  title,
  onPress,
  bkgroundColor = '#009688',
  borderWidth,
  alignSelf = 'baseline',
  borderColor = 'blue',
  textColor = colors.black,
  textFontSize = 15,
}) => {
  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      backgroundColor: bkgroundColor,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignSelf: alignSelf,
      borderWidth: borderWidth,
      borderColor: borderColor,
    },
    appButtonText: {
      fontSize: textFontSize,
      color: textColor,
      alignSelf: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomAppButton;
