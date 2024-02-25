import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../global/colors';
import CustomText from '../global/CustomText';

const Profil = ({
    username,
    email
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.circleUser}>
                <Icon name="user-circle" size={90} color={colors.gray100} />
            </View>
            <View style={styles.containerID} >
                <CustomText fontSize={18} fontWeight='bold' color={colors.blue100}>{username}</CustomText>
                <CustomText fontSize={13} color={colors.blue100}>{email}</CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginVertical: 25
    },
    circleUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 999,
        width: 95,
        height: 95,
        borderWidth: 1,
        borderColor: colors.white,
    },
    containerID: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profil
