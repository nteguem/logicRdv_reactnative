import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import RDVDetails from '../components/RDVDetails';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import Motif from '../components/Motif';

function Home() {
  return (
    <View>
      <SmallText style={[{color: 'magenta'}]}>SmallText</SmallText>
      <Regulartext style={[styles.customTextStyle, {color: 'orange'}]}>
        Regulartext
      </Regulartext>
      <BigText style={[{color: 'blue'}]}>BigText</BigText>

      <RDVDetails isTeleconsultation={true}/>
      {/* <Motif /> */}
      <View>
        <CustomAppButton
          onPress={() => Alert.alert('Button pressed')}
          title="Hello from custom button"
          buttonStyle={[{backgroundColor: 'transparent'}]}
          textStyle={[styles.customStyle]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextStyle: {
    marginBottom: 8,
  },
  customStyle: {
    color: 'yellow',
  },
});

export default Home;
