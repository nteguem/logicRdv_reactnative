import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPatient from '../../components/ListOfPatients/Modal'
import { ImTab } from 'react-icons/im'
import Doctor from '../../components/global/Doctor'

const ListOfPatients = () => {
    const data = [
        {
            id: 1,
            nom: '<NAME>',
            prenom: 'Franck',
            email: '<EMAIL>',
            telephone: '0612345678',
        },
        {
            id: 2,
            nom: '<NAME>',
            prenom: 'Franck',
            email: '<EMAIL>',
            telephone: '0612345678',
        },
        {
            id: 3,
            nom: '<NAME>',
            prenom: 'Franck',
            email: '<EMAIL>',
            telephone: '0612345678',
        },
        {
            id: 4,
            nom: '<NAME>',
            prenom: 'Franck',
            email: '<EMAIL>',
            telephone: '0612345678',
        },
    ]
    return (
        <ContainerScreen>
            <ScrollView>
                {
                    data.map((item, index) =>(
                        <Doctor
                            doctorName="item"
                        />

                    ))
                }
            </ScrollView>

        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        gap: 12,
        marginTop: 12
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    circleUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 999,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: colors.white,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    info: {
        fontSize: 16,
        color: '#666',
    },
    edit: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: -20
    },
    divider: {
        borderLeftWidth: 1,
        borderStyle: 'dashed',
        height: '100%',
    }
});
export default ListOfPatients
