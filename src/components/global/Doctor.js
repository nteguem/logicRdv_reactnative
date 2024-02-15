import React from 'react';
import {ImageComponent, StyleSheet, View} from 'react-native';
import Regulartext from '../Texts/RegularText';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';
import {colors} from './colors';
import CustomAppButton from './CustomAppButton';

const Doctor = () => {
  return (
    <View style={styles.parentStyles}>
      <View style={styles.myStyles}>
        <View>
          <BigText>AAAAAA</BigText>
        </View>
        <View>
          <BigText>Dr Formation</BigText>
          <Regulartext>Doctor doctor</Regulartext>
          <SmallText>41 rue de paris</SmallText>
          <SmallText>75020</SmallText>
          <Regulartext style={[{color: 'blue'}]}>0176310099</Regulartext>
        </View>
        <View>
          <BigText>AAAAAA</BigText>
        </View>
      </View>
      <View>
        <CustomAppButton
          onPress={() => Alert.alert('Button pressed')}
          title="Prendre rdv"
          buttonStyle={[styles.buttonSyles]}
          textStyle={[styles.textStyles]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 5,
  },
  buttonSyles: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  textStyles: {
    color: 'blue',
  },
});

export default Doctor;
