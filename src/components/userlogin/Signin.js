import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomAppButton from '../global/CustomAppButton'

const Signin = () => {
  return (
    <View>
      <Text> Nouveau sur LogicRdv? </Text>
      <CustomAppButton
        title="INSCRIPTION RAPIDE"
        borderWidth="none"
      
      />
    </View>
    
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
})

export default Signin