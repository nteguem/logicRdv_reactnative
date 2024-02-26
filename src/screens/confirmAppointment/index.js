import { View, Text } from 'react-native'
import React from 'react'
import CustumAlert from '../../components/Alert'
import { colors } from '../../components/global/colors'

const ConfirmationAppointmentScreen = () => {
  return (
    <CustumAlert
      message="Ceci est une très bonne alerte venant de moi. Votre rendez-vous a été enregistré avec succès."
      button1={{
        title: "Prendre un nouveau RDV",
        textColor: colors.white,
        backgroundColor: colors.blue,
        paddingVertical: 10,
        borderRadius: 10,
      }}
      button2={{
        title: "Quitter",
        textColor: colors.white,
        backgroundColor: colors.blue,
        paddingVertical: 10,
        borderRadius: 10,
      }}
    />
  )
}

export default ConfirmationAppointmentScreen;