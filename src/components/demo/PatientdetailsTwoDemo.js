import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import PatientdetailsTwo from '../Prepaiement/PatientdetailsTwo';

function PatientdetailsTwoDemo() {
  const data = [
    {
      detailsTitle: 'Consultation',
      doctorName: 'Dr Ringard',
      patientName: 'Laurel',
      dateTime: 'Jeudi 09/02/24 14:40',
    },
    {
      detailsTitle: 'Consultation du jour meme',
      doctorName: 'Dr Ringard',
      patientName: 'Laurel',
      dateTime: 'Jeudi 09/02/24 14:40',
    },
  ];

  return data.map((result, index) => (
    <View style={{paddingTop: 10}}>
      <PatientdetailsTwo
        key={index}
        detailsTitle={result.detailsTitle}
        doctorName={result.doctorName}
        patientName={result.patientName}
        dateTime={result.dateTime}
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

export default PatientdetailsTwoDemo;
