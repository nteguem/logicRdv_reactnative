import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import ValidationInfoCompletionForm from '../../components/ValidationAppointment/ValidationInfoCompletionForm'
import ValidationInfoRDV from '../../components/ValidationAppointment/ValidationInfoRDV'
import ValidationPaymentForm from '../../components/ValidationAppointment/ValidationPaymentForm'
import ValidationNoticeRDV from '../../components/ValidationAppointment/ValidationNoticeRDV'
import CustomAppButton from '../../components/global/CustomAppButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../components/global/colors'

const ValidationAppointment = (motif) => {

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
        <ValidationInfoCompletionForm />
        {
          motif === 'Teleconsultation' ? <ValidationPaymentForm
            pricemessage="70"
          /> : null
        }
        <ValidationNoticeRDV
          container="ceci est ce que vous voulez vous prendre un RDV la je me bat pour ce fait merciless"
          fontWeight="bold"
        />
        <View style={{ marginVertical: 10 }}>
          <CustomAppButton
            iconComponent={<MaterialIcons name="save" size={25} color={colors.white} style={{ marginRight: 5 }} />}
            title="J'ai lu les consignes et j'enregistre le rendez-vous"
            alignSelf="center"
            paddingVertical={15}
            paddingHorizontal={10}
            textColor={colors.white}
            textFontSize={13}
            borderRadius={10}
            bkgroundColor={colors.blue}
          />
        </View>
      </ScrollView>
    </ContainerScreen>
  )
}

export default ValidationAppointment