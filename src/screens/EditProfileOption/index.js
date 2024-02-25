import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView } from 'react-native'
import ProfileOptions from '../../components/Settings/ProfileOptions'
import Profil from '../../components/Settings/Profil'

const EditProfileOption = () => {
  return (
    <ContainerScreen>
      <ScrollView>
        <Profil username='NTEGUEM Roland' email='nteguemroland@gmail.com' />
        <ProfileOptions />
      </ScrollView>
    </ContainerScreen>
  )
}

export default EditProfileOption
