import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import { useNavigation } from '@react-navigation/native';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';



const DoctorListScreen = () => {

  const navigation = useNavigation();
  const handleMotifs = () => {
        navigation.navigate('Motif du Rendez-vous');
    };

  const data = [
    {
      name: "Dr Formation",
      Specialisation: 'Generaliste',
      isDoctorSpecialisationText: 'false',
      zip: "75020 Paris",
      address: "41 rue de Paris",
      phone: '01 23 45 36 22',
      isProfileIcon: 'true',

    },
  ];

  return (
    <ContainerScreen>
      {data.map((result, index) => (
          <Doctor
            key={index}
            handleChange={handleMotifs}
            texte2={result.Specialisation}
            texte4={result.address}
            texte3={result.zip}
            texte1={result.name}
            texte5={result.phone}
            colorTitle={colors.yellow}
            colorContain={colors.blue}
            fontWeight={'bold'}
            isPhoneIcons
            isProfileIcon
            isDelete
            isAppointment
            isRightIcons
          />
      ))}
    </ContainerScreen>
  )
}

export default DoctorListScreen;