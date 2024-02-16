import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Regulartext from '../Texts/RegularText';
import BigText from '../Texts/BigText';
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/FontAwesome6';

const Motif = ({
    labelplace,
    color,
    description
}) => {
    return (
        <View style={styles.card}>
            <View style={[styles.compartment, { flexDirection: 'row' }]}>
                <View style={[styles.circle, { backgroundColor: color, marginTop: 5 }]} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "85%" }}>
                    <View style={styles.compartmentContainer}>
                        <BigText style={styles.appointmentType}>{description}</BigText>
                        <Regulartext style={styles.place}>{labelplace}</Regulartext>
                    </View>
                    <Icon name="chevron-right" size={22} color={colors.gray100} />
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
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    appointmentType: {
        fontWeight: 'bold',
        color: colors.black,
    },
    place: {
        color: colors.black,
    },
    compartmentContainer: {
        paddingLeft: 30,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 15
    },
});

export default Motif;
