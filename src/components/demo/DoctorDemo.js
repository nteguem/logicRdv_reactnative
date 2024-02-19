import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Doctor from '../components/global/Doctor';

function DoctorDemo() {
  const data = [
    {
      name: 'Dr person1',
      location: '13 rue paris',
      phone: '0123453622',
      isRightIcons: 'true',
      isButton: 'true',
      isProfileIcon: 'true',
      isDoctorSpecialisationText: 'true',
    },
    {
      name: 'Dr person2',
      location: '13 rue paris',
      phone: '0123453622',
      isProfileIcon: 'true',
      isDoctorSpecialisationText: 'true',
      isArrowIcon: 'true',
    },
    {
      name: 'Dr person3',
      location: '13 rue paris',
      phone: '0123453622',
    },
  ];
  const result = data.map((result, index) => (
    <View style={{backgroundColor: '#DADEDF', height: 200, padding: 10}}>
      <Doctor
        key={index}
        isRightIcons={result.isRightIcons}
        isArrowIcon={result.isArrowIcon}
        isButton={result.isButton}
        isProfileIcon={result.isProfileIcon}
        isDoctorSpecialisationText={result.isDoctorSpecialisationText}
        doctorName={result.name}
        doctorLocation={result.location}
        doctorPhoneNumber={result.phone}
      />
    </View>
  ));
  return result;
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
  circleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 999,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 5,
  },
});

export default DoctorDemo;
