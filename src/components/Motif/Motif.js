import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/FontAwesome6';
import CustomText from '../global/CustomText';
import { useNavigation } from '@react-navigation/native';

const Motif = ({
    labelplace,
    color,
    description
}) => {
    const navigation = useNavigation();
    const handleMotif = () => {
        navigation.navigate('Jour et Heure du Rdv');
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={handleMotif}>
                <View style={[styles.compartment, { flexDirection: 'row' }]}>
                    <View style={[styles.circle, { backgroundColor: color, marginTop: 5 }]} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "85%" }}>
                        <View style={styles.compartmentContainer}>
                            <CustomText fontSize={15} fontWeight={'bold'} color={colors.black}>{description}</CustomText>
                            <CustomText fontSize={12} color={colors.black}>{labelplace}</CustomText>
                        </View>
                        <Icon name="chevron-right" size={22} color={colors.gray100} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 10,
    },
    compartment: {
        paddingVertical: 10,
        paddingHorizontal: 5,
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
