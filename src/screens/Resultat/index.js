import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import CustomText from '../../components/global/CustomText'
import { UseDispatch } from 'react-redux'
import Doctor from '../../components/global/Doctor'
import { colors } from '../../components/global/colors'
import { useRoute } from '@react-navigation/native';

const SearchResult = ( ) => {
  const { location, profession, searchall } = useRoute().params;
  const result = searchall;
  const isEmptysearch = (searchall) => {
    for(let key in searchall) {
        if(searchall.hasOwnProperty(id)){return false;}
    }
    return true;
  };
  console.log('====================================');
  console.log(isEmptysearch());
  console.log('====================================');
  return (
    <ContainerScreen>
      <View style={styles.hearder}>
        <CustomText color={colors.gray200}>Résultat de la recherche pour:</CustomText>
        <CustomText
         color={colors.black}
         fontWeight="bold"> {location} {profession} </CustomText>
      </View>
      {
        isEmptysearch() ? (
          <ScrollView>
            {result.map((item, index) => (
             <Doctor
             isProfileIcon ={true}
             isSearch = {true}
             isRightIcons = {true}
             isPhoneIcons = {true}
             isDelete ={true}
             texte1={item.civility + " " + item.nom}
             texte2={item.category}
             texte3={item.adress}
             texte4={item.zip +" " + item.city}
             texte5={item.tel}
             colorContain={colors.blue}
             colorTitle={colors.yellow}
              />
            
            ))}
          </ScrollView>
          
        ): (
          <View >
            <CustomText
            color={colors.black}
            >Aucun data trouver </CustomText>
          </View>
        )
      }
      
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