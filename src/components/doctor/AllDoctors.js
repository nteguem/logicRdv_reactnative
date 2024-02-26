import React from 'react'   ;
import { View } from 'react-native';
import Doctor from '../global/Doctor';
import { useNavigation } from '@react-navigation/native';

function AllDoctor() {
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
      phone: '0123453622',
      isProfileIcon: 'true',
      
    },
   
    
  ];
  const result = data.map((result, index) => (
    <View >
      <Doctor
        key={index}
        handleChange={handleMotifs}
        isArrowIcon={result.isArrowIcon}
        isProfileIcon={result.isProfileIcon}
        Specialisation ={result.Specialisation}
        address={result.address}
        zip={result.zip}
        doctorName={result.name}
        doctorPhoneNumber={result.phone}
        isButton
        isRightIcons
        isDoctorSpecialisationText
      />
    </View>
  ));
  return result;
}

export default AllDoctor;
