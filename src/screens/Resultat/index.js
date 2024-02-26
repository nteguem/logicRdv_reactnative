import { View, Text } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import CustomText from '../../components/global/CustomText'
import AllDoctor from '../../components/doctor/AllDoctors'

const ResultatRecherche = () => {
  const [resultat, setResultat] = useState(false)
  const data = 
  return (
    <ContainerScreen>

        {
          resultat ? (
            <View >
              <CustomText>Aucun data trouver </CustomText>
            </View>
          ) :
          (
            <View >
              <AllDoctor/>
            </View>
          )
        }
    </ContainerScreen>
  )
}

export default ResultatRecherche