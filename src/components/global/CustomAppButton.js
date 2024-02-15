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
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  iconComponent,
}) => {
  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      backgroundColor: bkgroundColor,
      borderRadius: borderRadius,
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
      alignSelf: alignSelf,
      borderWidth: borderWidth,
      borderColor: borderColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    appButtonText: {
      fontSize: textFontSize,
      color: textColor,
      alignSelf: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      {iconComponent && iconComponent}
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomAppButton;
