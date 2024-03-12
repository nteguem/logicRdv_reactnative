import React from 'react';
import { View } from 'react-native';
import CustomText from '../../components/global/CustomText';
import CustomAppButton from '../../components/global/CustomAppButton';
import { colors } from '../../components/global/colors';
import { loginStyles } from './styles';
import { useNavigation } from '@react-navigation/native';

const RegistrationButtons = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Inscription rapide');
  };

  return (
    <View>
      <View style={loginStyles.card}>
        <CustomText children="Nouveau sur LogicRdv?" color={colors.black} fontSize={12} fontWeight='bold' />
        <CustomAppButton
          title="INSCRIPTION RAPIDE"
          onPress={handleSignUp}
          textFontSize={12}
          textColor={colors.blue}
          bkgroundColor='transparent'
          fontWeight='bold'
        />
      </View>
    </View>
  );
};

export default RegistrationButtons;