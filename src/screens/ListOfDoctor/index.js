import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import AllDoctor from '../../components/ListOfDoctor/AllDoctors';



const DoctorListScreen = () => {
  return (
   <ContainerScreen>
      <AllDoctor />
   </ContainerScreen>
  )
}

export default DoctorListScreen;