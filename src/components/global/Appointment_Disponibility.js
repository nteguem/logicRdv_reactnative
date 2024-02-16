import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Appointment_Disponibility_Hours from './Appointment_Disponibility_Hours'
import { colors } from './colors'
import Regulartext from '../Texts/RegularText'

const Appointment_Disponibility = ({ date, appointments }) => {
    const [day, dateString] = date.split(' ');
    return (
        <View style={styles.container}>
            <View style={styles.day}>
                <Regulartext style={{ color: colors.black, fontWeight: "500" }}>{day}</Regulartext>
                <Regulartext style={{ color: colors.blue, fontWeight: "500" }}>{dateString}</Regulartext>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {appointments.map((appointment, index) => (
                    <Appointment_Disponibility_Hours
                        key={index}
                        time={appointment.time}
                        doctor={appointment.doctor}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    day: {
        marginRight: 20
    }
});

export default Appointment_Disponibility