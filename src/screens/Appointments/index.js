import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomAppButton from '../../components/global/CustomAppButton'
import AppointmentDetails from '../../components/reusable/Appointment_Details'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { colors } from '../../components/global/colors'
import dataAppointment from '../../components/data/dataAppointment'

const Appointments = () => {
    return (
        <ContainerScreen>
            <ScrollView>
                <View style={styles.containerButton}>
                    <CustomAppButton
                        onPress={() => console.log("recover password")}
                        title="PRENDRE UN RENDEZ-VOUS RAPIDE"
                        alignSelf="baseline"
                        paddingVertical={16}
                        paddingHorizontal={49}
                        textColor={colors.white}
                        textFontSize={15}
                        borderRadius={10}
                        bkgroundColor={colors.blue}
                    />
                </View>
                {dataAppointment.map((item, index) => (
                    <AppointmentDetails
                        key={index}
                        date={item.date}
                        consultationMethod={item.consultationMethod}
                        time={item.time}
                        doctor={item.doctor}
                        appointmentType={item.appointmentType}
                        patientName={item.patientName}
                        patientPhone={item.patientPhone}
                        patientEmail={item.patientEmail}
                        addressName={item.addressName}
                        addressLine1={item.addressLine1}
                        addressLine2={item.addressLine2}
                        addressPhone={item.addressPhone}
                        mode={item.mode}
                    />
                ))}

            </ScrollView>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
});

export default Appointments
