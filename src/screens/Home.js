import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import CustomAppButtonDemo from '../components/demo/CustomAppButtonDemo';
import DoctorDemo from '../components/demo/DoctorDemo';
import NotificationDetailsDemo from '../components/demo/NotificationDetailsDemo';
import PatientDetailsThreeDemo from '../components/demo/PatientDetailsThreeDemo';
import PatientdetailsTwoDemo from '../components/demo/PatientdetailsTwoDemo';
import ProfileOptionsDemo from '../components/demo/ProfileOptionsDemo';

function Home() {
  return (
    <ScrollView>
      <View>
        <ProfileOptionsDemo />
      </View>
    </ScrollView>
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
