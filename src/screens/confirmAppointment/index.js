import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../components/global/colors'
import CustomText from '../../components/global/CustomText'
import CustomAppButton from '../../components/global/CustomAppButton'
import { useNavigation } from '@react-navigation/native';

const ConfirmationAppointmentScreen = () => {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate('Mes rendez-vous');
  };

  const handleBackToAppointment = () => {
    navigation.navigate('Fixez rendez-vous');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content} >
        <View style={styles.message}>
          <CustomText
            color={colors.black}
            fontSize={12}
            fontWeight={500}
          >
            ceci est une confirmation ceci est une confirmat ceci est une confirmation ceci est une confirmation
            ceci est une confirmation ceci est une confirmat ceci est une confirmation ceci est une confirmation

          </CustomText>
        </View >
        <View style={styles.button}>
          <CustomAppButton
            onPress={handleBackToAppointment}
            title="Prendre un autre RDV"
            bkgroundColor={colors.blue}
            textColor={colors.white}
            paddingHorizontal={35}
            paddingVertical={10}
            borderRadius={8}
            textFontSize={12}
          />
          <CustomAppButton
            onPress={handleBackToHome}
            title="Quitter"
            bkgroundColor={colors.blue}
            textColor={colors.white}
            paddingHorizontal={10}
            paddingVertical={10}
            borderRadius={8}
            textFontSize={12}

          />
        </View>
      </View>
    </View>

  )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue300,
  },
  content: {
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  message: {
    paddingHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 12
  },
})

export default ConfirmationAppointmentScreen;