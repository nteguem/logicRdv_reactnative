import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './colors'
import Regulartext from '../Texts/RegularText';

const VrdvNotice = ({container, fontWeight}) => {

    return (
        <View style={styles.card}>
            <View style={styles.compartment}>
                <Regulartext style={[styles.text, {fontWeight: fontWeight}]}>{container}</Regulartext>
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
        marginBottom: 5,
    },
    compartment: {
        paddingVertical: 25,
        paddingHorizontal: 40,
    },
    text: {
        color: colors.black,
    }
});


export default VrdvNotice;