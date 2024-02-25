import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../global/CustomText'
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/Entypo';
import CustomAppButton from '../global/CustomAppButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalView from './ModalView'

const SearchForm = ({ borderWidth, borderRadius, borderColor }) => {
    const [showCrossIconLocation, setShowCrossIconLocation] = useState(false);
    const [showCrossIconProfession, setShowCrossIconProfession] = useState(false);
    const [location, setLocation] = useState('');
    const [profession, setProfession] = useState('');

    const handleLocationChange = (text) => {
        setLocation(text);
        setShowCrossIconLocation(text !== '');
    };

    const handleProfessionChange = (text) => {
        setProfession(text);
        setShowCrossIconProfession(text !== '');
    };

    return (
        <View>
            <View>
                <CustomText fontSize={13} color={colors.gray300} fontWeight='bold'>
                    Où ? Autour de ?
                </CustomText>
                <View style={styles.containeInput}>
                    <ModalView
                        isLocation
                        onChange={handleLocationChange}
                        placeholder='Code postal, Ville'
                        value={location}
                        borderWidth={borderWidth}
                        borderRadius={borderRadius}
                        borderColor={borderColor}
                    />
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <CustomText fontSize={13} color={colors.gray300} fontWeight='bold'>
                    Qui ? Spécialité ? Téléphone ?
                </CustomText>
                <View style={styles.containeInput}>
                    <ModalView
                        isLocation={false}
                        onChange={handleProfessionChange}
                        placeholder='Nom, Spécialité, Ville'
                        value={profession}
                        borderWidth={borderWidth}
                        borderRadius={borderRadius}
                        borderColor={borderColor}
                    />
                </View>
            </View>
            {(location !== '' && profession !== '') && (
                <View style={{ justifyContent: 'flex-end', marginBottom: 120, marginTop: 10 }}>
                    <CustomAppButton
                        iconComponent={<Ionicons name="search" size={20} color={colors.white} style={{ marginHorizontal: 15 }} />}
                        title='Rechercher'
                        alignSelf="baseline"
                        paddingVertical={15}
                        paddingHorizontal={122}
                        textColor={colors.white}
                        textFontSize={18}
                        fontWeight='bold'
                        borderWidth={1}
                        borderRadius={10}
                        borderColor={colors.white}
                        bkgroundColor={colors.blue}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        padding: 10,
        color: colors.black,
        fontSize: 18,
        borderRadius: 12,
        textAlignVertical: 'center',
        backgroundColor: colors.white,
        height: 60
    },
    containeInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20
    },
    containerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20%',
        marginLeft: 4
    },
    icon: {
        top: '15%',
        color: colors.blue
    },
});

export default SearchForm
