import { View, Text } from 'react-native'
import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import PatientManagementList from '../../components/PatientManagement/AllPatientManagement'

const PatientManagement = () => {
  return (
    <ContainerScreen>
        <PatientManagementList/>
    </ContainerScreen>
  )
}

export default PatientManagement