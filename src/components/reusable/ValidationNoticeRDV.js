import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../global/colors';
import CustomText from '../global/CustomText';

const ValidationNoticeRDV = ({container, fontWeight}) => {
  return (
    <View style={styles.card}>
      <View style={styles.compartment}>
        <CustomText fontSize={15} color={colors.black} fontWeight={fontWeight}>
          {container}
        </CustomText>
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
    marginBottom: 5,
  },
  compartment: {
    paddingVertical: 25,
    paddingHorizontal: 40,
  },
});

export default ValidationNoticeRDV;
