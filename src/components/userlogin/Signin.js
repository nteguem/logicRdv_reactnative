import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomAppButton from '../global/CustomAppButton'
import { colors } from '../global/colors';
import CustomText from '../global/CustomText';

const Signin = () => {
  const handleSing  = () => {
    console.log("bonnjour a tous");
  }
  return (
    <View style={styles.container}>
      <CustomText
        children="Nouveau sur LogicRdv?"
        fontSize={18}
      
       /> 
      <CustomAppButton
        title="INSCRIPTION RAPIDE"
        onPress={handleSing }
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