import React from 'react';
import {ImageComponent, StyleSheet, View} from 'react-native';
import Regulartext from '../Texts/RegularText';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';
import {colors} from './colors';
import CustomAppButton from './CustomAppButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Doctor = () => {
  return (
    <View style={styles.parentStyles}>
      <View style={styles.myStyles}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.circleUser}>
            <Icon name="user-circle" size={50} color={colors.gray} />
          </View>
          <View style={{paddingLeft: 10}}>
            <BigText>Dr Formation</BigText>
            <Regulartext>Doctor doctor</Regulartext>
            <SmallText>41 rue de paris</SmallText>
            <SmallText>75020</SmallText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                width: 100,
              }}>
              <Regulartext style={[{color: 'blue'}]}>0176310099</Regulartext>
              <View style={[styles.circle]}>
                <Icon name="phone" color="white" size={20} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'visible',
          }}>
          <Icon name="whatsapp" size={25} />
          <Icon name="whatsapp" size={25} />
          <Icon name="map-marker" size={25} />
        </View>
      </View>
      <View>
        <CustomAppButton
          title="Prendre rdv"
          paddingHorizontal={5}
          paddingVertical={5}
          borderRadius={5}
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
    padding: 10,
  },
  buttonSyles: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  textStyles: {
    color: 'blue',
  },
  circleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 999,
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: colors.gray,
    marginRight: 5,
  },
  circle: {
    flexDirection: 'row',
    width: 28,
    height: 28,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginLeft: 10,
  },
});

export default Doctor;
