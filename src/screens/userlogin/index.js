import { View, Text } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import EmailForm from '../../components/userlogin/EmailComponent'
import Signin from '../../components/userlogin/Signin'
import PasswordForm from '../../components/userlogin/Pwd'
const UserLogin = () => {
  return (
    <ContainerScreen>
     <EmailForm/> 
     <Signin/>
    </ContainerScreen>
  )
}

export default UserLogin;
