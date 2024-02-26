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
        fontSize={18}
      
       /> 
      <CustomAppButton
        title="INSCRIPTION RAPIDE"
        onPress={handleSignUp }
        textFontSize={14}
        textColor={colors.blue}
        bkgroundColor='transparent'
      
      />
    </View>
    
  )
};
const styles = StyleSheet.create({
  container:{
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
})

export default Signin