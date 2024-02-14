import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from './colors';

const CustomAppButton = ({title, buttonStyle, textStyle, onPress}) => {
  const passedButtonStyles = Array.isArray(buttonStyle)
    ? Object.assign({}, ...buttonStyle)
    : buttonStyle;
  const passedTextStyles = Array.isArray(textStyle)
    ? Object.assign({}, ...textStyle)
    : textStyle;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, {...passedButtonStyles}]}>
      <Text style={[styles.appButtonText, {...passedTextStyles}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    backgroundColor: '#009688',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'baseline',
  },
  appButtonText: {
    fontSize: 20,
    color: colors.white,
    alignSelf: 'center',
  },
});

export default CustomAppButton;
