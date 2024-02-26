import React from 'react'   ;
import { View } from 'react-native';
import Doctor from '../global/Doctor';

function AllDoctor() {
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
        isArrowIcon={result.isArrowIcon}
        isProfileIcon={result.isProfileIcon}
        Specialisation ={result.Specialisation}
        address={result.address}
        zip={result.zip}
        doctorName={result.name}
        doctorPhoneNumber={result.phone}
      />
    </View>
  ));
  return result;
}

export default AllDoctor;
