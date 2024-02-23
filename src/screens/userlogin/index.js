import { View, Text } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import EmailComponent from '../../components/userlogin/EmailComponent'
import Signin from '../../components/userlogin/Signin'

const UserLogin = () => {
  return (
    <ContainerScreen>
        <View>
            <EmailComponent
                title="Vous etes deja inscrit, veuillez vous connecter sur votre espace particulier"
                button={{
                    title: 'Suivant',
                    onPress: () => console.log('Pressed'),
                }}
            />
            <Signin />
        </View>
    </ContainerScreen>
  )
}

export default UserLogin;
