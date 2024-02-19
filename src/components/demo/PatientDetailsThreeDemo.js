import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import PatientdetailsTwo from '../components/reusable/PatientdetailsTwo';
import PatientDetailsThree from '../components/reusable/PatientDetailsThree';

function PatientDetailsThree() {
  const data = [
    {
      motif: 'Téléphone',
      paragraph1: '40.00 EUR a prelever en fin de consultation',
      paragraph2: 'Le 08/09/24 sur votre CB xxx 0003',
      textBottom: 'Votre Rendez-vous a ete pré-payé',
      textBody:
        '40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation 40.00 EUR a prelever en fin de consultation',
    },
    {
      motif: 'Téléconsultation',
      paragraph1: '40.00 EUR paiement annulé',
      paragraph2: 'Le 08/09/24 sur votre CB xxx 0003',
      textBottom: 'Votre Rendez-vous a ete annulé',
    },
  ];

  return data.map((result, index) => (
    <View style={{paddingTop: 10}}>
      <PatientDetailsThree
        key={index}
        paragraph1={result.paragraph1}
        paragraph2={result.paragraph2}
        motif={result.motif}
        textBody={result.textBody}
        textBottom={result.textBottom}
      />
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextStyle: {
    marginBottom: 8,
  },
  customStyle: {
    color: 'yellow',
  },
});

export default PatientDetailsThree;
