import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

function Home() {
  return (
    <ScrollView>
      <View>
        <SmallText style={[{ color: 'magenta' }]}>SmallText</SmallText>
      <Regulartext style={[styles.customTextStyle, { color: 'orange' }]}>
        Regulartext
      </Regulartext>
      <BigText style={[{ color: 'blue' }]}>BigText</BigText>

      </View>
    </ScrollView>
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
