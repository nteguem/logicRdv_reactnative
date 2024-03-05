import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../global/CustomText'
import { colors } from '../global/colors'
import CustomAppButton from '../global/CustomAppButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalView from './ModalView'
import { useNavigation } from '@react-navigation/native';


const SearchForm = ({ borderWidth, borderRadius, borderColor }) => {
    const navigation = useNavigation();
    const [location, setLocation] = useState('');
    const [profession, setProfession] = useState('');

    const handleLocationChange = (text) => {
        setLocation(text);
    };

    const handleProfessionChange = (text) => {
        setProfession(text);
    };

    const handleSearch = (result) => {
        //dispatch(resultRequest({"proxy_ville":"75001 PARIS 1er","proxy_nom":"Médecin Généraliste","proxy_ville_id":"30924","proxy_nom_id":"c1","proxy_search":"","proxy_page":"1"}));
        console.log("bonjour le monde ", result )
        navigation.navigate("Résultats");
    };


    const clearInputText = () => {
        setLocation(''); 
        setProfession(''); 
    };

    return (
        <View>
            <View>
                <CustomText fontSize={12} color={colors.gray300} fontWeight='bold'>
                    Où ? Autour de ?
                </CustomText>
                <View style={styles.containeInput}>
                    <View style={{ width: '80%' }}>
                        <ModalView
                            isCity
                            onChange={handleLocationChange}
                            placeholder='Code postal, Ville'
                            value={location}
                            borderWidth={borderWidth}
                            borderRadius={borderRadius}
                            borderColor={borderColor}
                            clearInputText={clearInputText}
                        />
                    </View>
                    <View style={{ width: '20%' }}>
                        <ModalView isLocation />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <CustomText fontSize={12} color={colors.gray300} fontWeight='bold'>
                    Qui ? Spécialité ? Téléphone ?
                </CustomText>
                <View style={styles.containeInput}>
                    <ModalView
                        onChange={handleProfessionChange}
                        placeholder='Nom, Spécialité, Téléphone'
                        value={profession}
                        borderWidth={borderWidth}
                        borderRadius={borderRadius}
                        borderColor={borderColor}
                        clearInputText={clearInputText}
                    />
                </View>
            </View>
            {(location !== '' && profession !== '') && (
                <View style={{ justifyContent: 'flex-end', marginVertical: 12, }}>
                    <CustomAppButton
                        iconComponent={<Ionicons name="search" size={18} color={colors.white} style={{ marginHorizontal: 15 }} />}
                        title='Rechercher'
                        alignSelf="baseline"
                        paddingVertical={12}
                        textColor={colors.white}
                        textFontSize={15}
                        fontWeight='bold'
                        borderWidth={1}
                        borderRadius={10}
                        borderColor={colors.white}
                        bkgroundColor={colors.blue}
                        width='100%'
                        onPress={() => handleSearch(location, profession)}
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
        fontSize: 12,
        borderRadius: 12,
        textAlignVertical: 'center',
        backgroundColor: colors.white,
        height: 60
    },
    containeInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
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

export default SearchForm;
