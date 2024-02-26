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
import { StyleSheet, View } from 'react-native';
import CustomText from '../global/CustomText';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PatientDetailsThree = ({
  motif,
  textBody,
  paragraph1,
  paragraph2,
  textBottom,
  isTeleconsultation = false
}) => {
  return (
    <View>
    <View style={styles.container}>
      <CustomText fontSize={18} fontWeight={'bold'} color={colors.black}>
        Prépaiement de votre Rendez-vous {motif}
      </CustomText>
      <CustomText fontSize={16} color={colors.black} style={{ paddingTop: 10 }}>
        {paragraph1}
      </CustomText>
      <CustomText fontSize={16} color={colors.black} style={{ paddingTop: 10 }}>
        {paragraph2}
      </CustomText>
      {textBody && (
        <CustomText fontSize={16} color={colors.black} style={{ paddingTop: 10 }}>
          {textBody}
        </CustomText>
      )}
      <CustomText fontSize={16} color={colors.black} style={{ paddingTop: 25 }}>
        {textBottom}
      </CustomText>
    </View>
    {isTeleconsultation && (
        <View style={{marginTop: 15}}>
          <CustomAppButton
            iconComponent={<MaterialIcons name="featured-video" size={25} color={colors.white} style={{ marginHorizontal: 15 }} />}
            title='Lancer la téléconsultation'
            alignSelf="center"
            paddingVertical={15}
            paddingHorizontal={50}
            textColor={colors.white}
            textFontSize={18}
            borderRadius={15}
            bkgroundColor={colors.blue}
          />
        </View>
      )}
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
