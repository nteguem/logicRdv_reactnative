import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../global/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../global/CustomText';

const ValidationInfoRDV = ({title, date, doctor, place, patient}) => {
  return (
    <View style={styles.card}>
      <View style={styles.compartment}>
        <View style={styles.titleRDV}>
          <CustomText
            fontSize={20}
            fontWeight={700}
            color={colors.black}
            style={styles.title}>
            {title}
          </CustomText>
        </View>
        <View style={styles.detailsContainer}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            color={colors.blue}
            marginRight={5}
          />
          <CustomText fontSize={15} color={colors.black}>
            {date}
          </CustomText>
        </View>
        <View style={styles.detailsContainer}>
          <Icon
            name="user-large"
            size={18}
            color={colors.blue}
            marginRight={5}
          />
          <CustomText fontSize={15} color={colors.black}>
            {doctor}
          </CustomText>
        </View>
        <View style={styles.detailsContainer}>
          <MaterialIcons
            name="shopping-bag"
            size={22}
            color={colors.blue}
            marginRight={5}
          />
          <CustomText fontSize={15} color={colors.black}>
            {place}
          </CustomText>
        </View>
        <View style={styles.detailsContainer}>
          <Icon
            name="user-group"
            size={18}
            color={colors.blue}
            marginRight={5}
          />
          <CustomText fontSize={15} color={colors.black}>
            {patient}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  compartment: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'column',
    gap: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  titleRDV: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 12,
  },
});

export default ValidationInfoRDV;
