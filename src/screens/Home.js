import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import { Alert, StyleSheet, View } from 'react-native';
import Appointment_Disponibility from '../components/global/Appointment_Disponibility';
import data from './data';

function Home() {
  return (
    <View>
      {/* <SmallText style={[{ color: 'magenta' }]}>SmallText</SmallText>
      <Regulartext style={[styles.customTextStyle, { color: 'orange' }]}>
        Regulartext
      </Regulartext>
      <BigText style={[{ color: 'blue' }]}>BigText</BigText> */}
      {data.map((item, index) => (
        <Appointment_Disponibility
          key={index}
          date={item.date}
          appointments={item.appointments}
        />
      ))}
      
    </View>
  );
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

export default Home;
