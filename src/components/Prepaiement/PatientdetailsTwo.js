/*
  This React Native component is designed to display patient details in a stylized format.
  It takes props such as 'detailsTitle', 'doctorName', 'patientName', and 'dateTime' to customize the displayed information.

  Component Structure:
  - View: Main container for the component.
    - View: Row for the details title with an icon.
      - Fontisto: Icon indicating medical details.
      - CustomText: Displays the details title with specified styling.
    - View: Rows for doctor and patient names with respective icons.
      - FontAwesome5: Icon representing a medical professional.
      - FontAwesome: Icon representing a patient.
      - CustomText: Displays the doctor's name and patient's name with specified styling.
    - View: Row for the date and time of the appointment.
      - CustomText: Displays the date and time with specified styling.

  Styles:
  - parentStyle: Layout styles for the main container, providing padding, border radius, and background color.
  - row1: Layout styles for the details title row, including background color and padding.
  - row2: Layout styles for the rows containing doctor and patient names.
  - row22: Layout styles for the sub-rows within the row2, providing space between elements.
  - row3: Layout styles for the row containing the date and time, including background color and padding.
  - textStyle: Additional styling for text elements, providing left margin.
*/

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from '../global/CustomText';
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
        <Fontisto name="first-aid-alt" color={colors.white} size={20} />
        <CustomText fontSize={18} fontWeight={'bold'} color={colors.white} style={styles.textStyle}>
          {detailsTitle}
        </CustomText>
      </View>
      <View style={styles.row2}>
        <View style={styles.row22}>
          <FontAwesome5 name="user-md" color={colors.white} size={25} />
          <CustomText fontSize={16} fontWeight={'bold'} style={styles.textStyle}>
            Avec {doctorName}
          </CustomText>
        </View>
        <View style={styles.row22}>
          <FontAwesome name="user-circle" color={colors.white} size={25} />
          <CustomText fontSize={16} fontWeight={'bold'} style={[styles.textStyle]}>
            Pour {patientName}
          </CustomText>
        </View>
      </View>
      <View style={styles.row3}>
        <CustomText fontSize={18} fontWeight={'bold'} color={colors.white}>
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
