import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from './colors';
import CustomText from '../Texts/CustomText';

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
  marginHorizontal,
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    appButtonText: {
      alignSelf: 'center',
      marginHorizontal: marginHorizontal,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      {iconComponent && iconComponent}
      <CustomText
        fontSize={textFontSize}
        color={textColor}
        style={styles.appButtonText}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomAppButton;
