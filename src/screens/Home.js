import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LoadingComponent from '../components/Loading';
import CustumAlert from '../components/Alert';



function Home() {
  return (
    <View>
      <Text>tooruiopjhb</Text>
      <Text>tooruiopjhb</Text>
      <Text>tooruiopjhb</Text>
      <Text>tooruiopjhb</Text>
      <Text>tooruiopjhb</Text>
      <Text>tooruiopjhb</Text>
      <CustumAlert
        isSuccess={false}
        message="est une tres bonne arlerte venant de moi
        est une tres bonne arlerte venant de moiest une tres bonne arlerte venant de moi"
        button1={{
          title: 'okay',
          onPress: () => console.log('OK Pressed'),
          textColor: '#fff',
          bkgroundColor: '#007bff',
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        button2={{
          title: 'Reset',
          onPress: () => console.log('OK Pressed'),
          textColor: '#fff',
          bkgroundColor: '#007bff',
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
      />

      {/* <LoadingComponent nom="Connexion..."/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
