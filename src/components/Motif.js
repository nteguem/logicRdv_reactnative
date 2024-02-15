import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import Regulartext from './Texts/RegularText';
import BigText from './Texts/BigText';
import { colors } from './global/colors'
import CustomAppButton from './global/CustomAppButton';

const Motif = () => {
    return (
        <View style={styles.card}>
            <View style={[styles.compartment, {flexDirection:'row'}]}>
                <View style={[styles.circle, { flexDirection:'column', justifyContent:'flex-start', backgroundColor: 'green', marginTop: 10 }]} />
                <View style={styles.compartmentContainer}>
                    <BigText style={styles.appointmentType}>Consultation</BigText>
                    <Regulartext style={styles.place}>Au cabinet</Regulartext>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray100,
        margin: 10,
    },
    compartment: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    appointmentType: {
        fontWeight: 'bold',
        marginTop: 5,
        color: colors.black,
    },
    place: {
        color: colors.black,
        marginTop: 5,
    },
    compartmentContainer: {
        paddingLeft: 30,
        paddingBottom: 10
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 15
    },
});

export default Motif;
