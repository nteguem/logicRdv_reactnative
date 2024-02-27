import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Doctor from '../../components/global/Doctor';
import { useNavigation } from '@react-navigation/native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { colors } from '../../components/global/colors';

function PatientManagement() {
  const navigation = useNavigation();

  const handleListPatient = () => {
    navigation.navigate('Liste des patients');
  };
  const data = [
    {
      name: "Dr Formation",
      Specialisation: 'Generaliste',
      isDoctorSpecialisationText: 'false',
      zip: "75020 Paris",
      address: "41 rue de Paris",
      phone: '0123453622',
      isRightIcons: 'false',
      isButton: 'false',
      isProfileIcon: 'true',
      isArrowIcon: "true",
    },
  ];
  
  return (
    <ContainerScreen>
      <ScrollView>
        {
          data.map((result, index) => (
            <View  >
              <TouchableOpacity onPress={handleListPatient}>
                <Doctor
                  texte2={result.Specialisation}
                  texte3={result.address}
                  texte4={result.zip}
                  texte1={result.name}
                  texte5={result.phone}
                  colorTitle={colors.yellow}
                  colorContain={colors.blue}
                  fontWeight={'bold'}
                  isArrowIcon
                  isProfileIcon
                />
              </TouchableOpacity>
              
            </View>
          ))
        }
      </ScrollView>
    </ContainerScreen>
  );
}

export default PatientManagement;
