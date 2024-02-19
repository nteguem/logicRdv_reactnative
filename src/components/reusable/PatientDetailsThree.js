import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PatientDetailsThree = ({
  motif,
  textBody,
  paragraph1,
  paragraph2,
  textBottom,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
        Prépaiement de votre Rendez-vous {motif}
      </Text>
      <Text style={{paddingTop: 10}}>{paragraph1}</Text>
      <Text style={{paddingTop: 10}}>{paragraph2}</Text>
      {textBody && <Text style={{paddingTop: 10}}>{textBody}</Text>}
      <Text style={{paddingTop: 10, fontWeight: 'bold'}}>{textBottom}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: '#00B35C',
    padding: 15,
    color: 'black',
  },
});

export default PatientDetailsThree;
