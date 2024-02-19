import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from '../Texts/CustomText';
import {colors} from '../global/colors';

const PatientdetailsTwo = ({
  detailsTitle,
  doctorName,
  patientName,
  dateTime,
}) => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.row1}>
        <Fontisto name="first-aid-alt" color="white" size={15} />
        <CustomText fontSize={15} color={colors.white} style={styles.textStyle}>
          {detailsTitle}
        </CustomText>
      </View>
      <View style={styles.row2}>
        <View style={styles.row22}>
          <FontAwesome5 name="user-md" color="white" size={20} />
          <CustomText fontSize={15} style={styles.textStyle}>
            Avec {doctorName}
          </CustomText>
        </View>
        <View style={styles.row22}>
          <FontAwesome name="user-circle" color="white" size={20} />
          <CustomText fontSize={15} style={[styles.textStyle]}>
            Pour {patientName}
          </CustomText>
        </View>
      </View>
      <View style={styles.row3}>
        <CustomText fontSize={15} color={colors.white}>
          Le {dateTime}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#007FA9',
  },
  row1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#8BB1B8',
    borderRadius: 20,
    alignSelf: 'center',
  },
  row2: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  row22: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  row3: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#69CFF7',
    borderRadius: 20,
  },
  textStyle: {
    marginLeft: 10,
  },
});

export default PatientdetailsTwo;
