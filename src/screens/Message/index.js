import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'

const Message = () => {
  return (
    <ContainerScreen>
        <View style={{height: '100%', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
          <CustomText fontSize={18} color={colors.black} style={{ textAlign: 'center' }}>
            Aucune donnée disponible pour cette recherche.
          </CustomText>
          </View>
    </ContainerScreen>
  )
}

export default Message
