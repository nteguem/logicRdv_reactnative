import React, { useEffect, useState } from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen'
import { ScrollView } from 'react-native'
import ProfileOptions from '../../components/Settings/ProfileOptions'
import Profil from '../../components/Settings/Profil'
import { getUserData } from '../../utils/helpers'

const EditProfileOption = () => {
  const [userData, setUserData] = useState("");
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    fetchData();
  }, [])
  
 
  return (
    <ContainerScreen >
      <ScrollView>
        <Profil username={`${userData?.nom} ${userData?.prenom}`} email={userData?.email} />
        <ProfileOptions />
      </ScrollView>
    </ContainerScreen>
  )
};



export default EditProfileOption;
