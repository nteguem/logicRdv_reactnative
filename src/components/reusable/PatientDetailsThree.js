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
