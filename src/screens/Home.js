import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {StyleSheet, View} from 'react-native';
import RDVDetails from '../components/RDVDetails';

function Home() {
  return (
    <View>
      <SmallText style={[{color: 'magenta'}]}>SmallText</SmallText>
      <Regulartext style={[styles.customTextStyle, {color: 'orange'}]}>
        Regulartext
      </Regulartext>
      <BigText style={[{color: 'blue'}]}>BigText</BigText>
      <RDVDetails />
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
});

export default Home;
