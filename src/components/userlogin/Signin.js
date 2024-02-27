import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomAppButton from '../global/CustomAppButton'
import { colors } from '../global/colors';
import CustomText from '../global/CustomText';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  
  const handleSignUp = () => {
        navigation.navigate('Inscription rapide');
    };
  return (
    <View style={styles.container}>
      <CustomText
        children="Nouveau sur LogicRdv?"
        color= {colors.black}
        fontSize={17}
        fontWeight='bold'
      
       /> 
      <CustomAppButton
        title="INSCRIPTION RAPIDE"
        onPress={handleSignUp }
        textFontSize={16}
        textColor={colors.blue}
        bkgroundColor='transparent'
        fontWeight='bold'
      
      />
    </View>
    
  )
};
const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
},
})

export default Signin