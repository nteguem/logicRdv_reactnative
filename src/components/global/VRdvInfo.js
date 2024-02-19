import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Regulartext from '../Texts/RegularText';
import BigText from '../Texts/BigText';
import { colors } from './colors'
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VRdvInfo = ({
    title,
    date,
    doctor,
    place,
    patient
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.compartment}>
                <View style={styles.titleRDV}>
                    <BigText style={styles.title}>{title}</BigText>
                </View>
                <View style={styles.detailsContainer}>
                    <MaterialCommunityIcons name="clock-outline" size={22} color={colors.blue} marginRight={5} />
                    <Regulartext style={styles.date}>{date}</Regulartext>
                </View>
                <View style={styles.detailsContainer}>
                    <Icon name="user-large" size={18} color={colors.blue} marginRight={5} />
                    <Regulartext style={styles.doctor}>{doctor}</Regulartext>
                </View>
                <View style={styles.detailsContainer}>
                    <MaterialIcons name="shopping-bag" size={22} color={colors.blue} marginRight={5} />
                    <Regulartext style={styles.place}>{place}</Regulartext>
                </View>
                <View style={styles.detailsContainer}>
                    <Icon name="user-group" size={18} color={colors.blue} marginRight={5} />
                    <Regulartext style={styles.patient}>{patient}</Regulartext>
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
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    compartment: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'column',
        gap: 4
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 4,
    },
    titleRDV: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.black,
        fontWeight: 700,
        marginBottom: 12
    },
    date: {
        color: colors.black,
    },
    doctor: {
        color: colors.black,
    },
    place: {
        color: colors.black,
    },
    patient: {
        color: colors.black,
    }
});

export default VRdvInfo;