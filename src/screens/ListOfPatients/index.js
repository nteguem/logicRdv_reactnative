import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomText from '../../components/global/CustomText'
import { colors } from '../../components/global/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalPatient from '../../components/ListOfPatients/Modal'
import Doctor from '../../components/global/Doctor'

const ListOfPatients = () => {
    return (
        <ContainerScreen>
            <ScrollView>
            <Doctor
                  texte1='Ndeh Wilfried'
                  texte2='+33 6 58 66 94 53'
                  texte3='01/01/2000'
                  texte4='rootndehl@gmail.com'
                  colorTitle={colors.black}
                  colorContain={colors.black}
                  marginBottom={10}
                  isIcon
                  isUpdate
                  isDelete
                  isProfileIcon
                />
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