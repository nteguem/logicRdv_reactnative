import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import ContainerScreen from '../components/wrappers/ContainerScreen'

function Home() {
  return (
    <ContainerScreen> 
        <CustomAppButton
          onPress={() => Alert.alert('Button pressed')}
          title="PRENDRE UN RENDEZ-VOUS RAPIDE"
          buttonStyle={[{backgroundColor: '#488ee3'}]}
        />
   </ContainerScreen> 
  );
}


export default Home;
