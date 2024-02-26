import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import ValidationInfoCompletionForm from '../../components/ValidationAppointment/ValidationInfoCompletionForm'
import ValidationInfoRDV from '../../components/ValidationAppointment/ValidationInfoRDV'
import ValidationPaymentForm from '../../components/ValidationAppointment/ValidationPaymentForm'
import ValidationNoticeRDV from '../../components/ValidationAppointment/ValidationNoticeRDV'

const PayementForm = (motif) => {
    
  return (
    <ContainerScreen>
      <ScrollView>
        <ValidationInfoRDV
          title="Prendre un RDV par person"
          date="13/12/24"
          doctor="Dr. Jean"
          place="consultation"
          patient="Petit franck"
        />
        <ValidationInfoCompletionForm/>
        {
          motif === 'Teleconsultation'?  <ValidationPaymentForm 
            pricemessage="70"
          /> : null
        }
        <ValidationNoticeRDV
          container="ceci est ce que vous voulez vous prendre un RDV la je me bat pour ce fait merciless"
          fontWeight="bold"
        />
        
      </ScrollView>
    </ContainerScreen>
  )
}

export default PayementForm