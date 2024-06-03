import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { Image, ScrollView, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'

const Message = () => {
  return (
    <ContainerScreen>
        <View style={{ height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/images/favicon.jpg')} style={{ width: 25, height: 25, borderRadius: 5 }} />
            <CustomText color={colors.blue}>Aucune donnée disponible</CustomText>
          </View>
    </ContainerScreen>
  )
}

export default Message
