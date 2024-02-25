import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'

const PayementForm = () => {
    const [haveRDV, setHaveRDV] = useState(false)
  return (
    <ContainerScreen>
        <Text> bonjour le monde</Text>
    </ContainerScreen>
  )
}

export default PayementForm