import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from './colors'
import Regulartext from '../Texts/RegularText';

const Appointment_Disponibility_Hours = ({ time, doctor }) => {
    return (
        <View>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <Regulartext style={styles.time}>{time}</Regulartext>
                    <Regulartext style={styles.doctor}>{doctor}t</Regulartext>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: colors.gray,
        padding: 4,
        marginLeft: 5,
        flex: 1
    },
    time: {
        color: colors.gray,
    },
    doctor: {
        color: colors.black,
        margin: 4
    },
});

export default Appointment_Disponibility_Hours
