/*
  This React Native component is used to display patient details, specifically related to prepayment information for an appointment.
  It takes several props including 'motif', 'textBody', 'paragraph1', 'paragraph2', and 'textBottom' for customization.

  Component Structure:
  - View: Main container for the component.
    - CustomText: Displays the title with bold formatting, indicating the purpose of the message.
    - CustomText: Displays the first paragraph of information.
    - CustomText: Displays the second paragraph of information.
    - Conditional Rendering: Displays additional text body if provided.
    - CustomText: Displays a bottom line of text with bold formatting.

  Styles:
  - container: Layout styles for the main container, providing a rounded corner and green background with black text.
*/

import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../global/CustomText';

const PatientDetailsThree = ({
  motif,
  textBody,
  paragraph1,
  paragraph2,
  textBottom,
}) => {
  return (
    <View style={styles.container}>
      <CustomText fontSize={15} fontWeight={'bold'}>
        Prépaiement de votre Rendez-vous {motif}
      </CustomText>
      <CustomText fontSize={15} style={{paddingTop: 10}}>
        {paragraph1}
      </CustomText>
      <CustomText fontSize={15} style={{paddingTop: 10}}>
        {paragraph2}
      </CustomText>
      {textBody && (
        <CustomText fontSize={15} style={{paddingTop: 10}}>
          {textBody}
        </CustomText>
      )}
      <CustomText fontSize={15} fontWeight={'bold'} style={{paddingTop: 10}}>
        {textBottom}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#00B35C',
    padding: 15,
    color: 'black',
  },
});

export default PatientDetailsThree;
