import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'

const Message = () => {
  return (
    <ContainerScreen>
        {/* <ScrollView> */}
            <CustomText fontSize={18} color={colors.black} style={{textAlign: 'center'}}>
                Aucune donnée disponible pour cette recherche.
            </CustomText>
        {/* </ScrollView> */}
      
    </ContainerScreen>
  )
}

export default Message
