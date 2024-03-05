import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import CustomText from '../../components/global/CustomText'
import { UseDispatch } from 'react-redux'
import Doctor from '../../components/global/Doctor'
import { colors } from '../../components/global/colors'

const SearchResult = ( ) => {
  

  return (
    <ContainerScreen>
      <View style={styles.hearder}>
        <CustomText>Résultat de la recherche pour:</CustomText>
        <CustomText
         color={colors.black}
         fontWeight="bold"> bonjour tu est ou la?? </CustomText>
      </View>
      {/* <View>

        {
          resultat ? (
            <View >
              <CustomText>Aucun data trouver </CustomText>
            </View>
          ) :
          (
            <ScrollView>
              <Text>bonjour le monde c'est franck</Text>
            </ScrollView>
          )
        }

      </View> */}
    </ContainerScreen>
  )
}

const styles = StyleSheet.create(
 {
  hearder:{
    marginHorizontal: -10,
    paddingHorizontal:10,
    paddingVertical:10

  }
 }
)
export default SearchResult