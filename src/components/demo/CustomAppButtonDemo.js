import React from 'react';
import SmallText from '../components/Texts/SmallText';
import Regulartext from '../components/Texts/RegularText';
import BigText from '../components/Texts/BigText';
import {Alert, StyleSheet, View} from 'react-native';
import CustomAppButton from '../components/global/CustomAppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function CustomAppButtonDemo() {
  return (
    <View>
      <View>
        <View style={{marginTop: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Téléconsultation"
            alignSelf="center"
            paddingVertical={10}
            paddingHorizontal={20}
            textColor="white"
            borderRadius={5}
            bkgroundColor="#4d8fd9"
          />
        </View>
        <View style={{marginTop: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Poursuivre la prise de RDV"
            alignSelf="center"
            paddingVertical={10}
            paddingHorizontal={20}
            textColor="white"
            borderRadius={5}
            bkgroundColor="#4d8fd9"
          />
        </View>
        <View style={{marginTop: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Reprendre un RDV"
            alignSelf="center"
            paddingVertical={10}
            paddingHorizontal={20}
            textColor="#4d8fd9"
            borderRadius={5}
            bkgroundColor="transparent"
          />
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Prendre RDV"
            alignSelf="baseline"
            paddingVertical={10}
            paddingHorizontal={5}
            textColor="white"
            borderRadius={5}
            bkgroundColor="#4d8fd9"
          />
        </View>

        <View style={{marginTop: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Se Désinscrire"
            paddingHorizontal={5}
            paddingVertical={10}
            borderRadius={5}
            bkgroundColor="#ff0000"
            textFontSize={18}
            alignSelf="stretched"
            marginHorizontal={5}
            iconComponent={
              <View>
                <Icon name="delete" size={20} color={'white'} />
              </View>
            }
          />
        </View>

        <View style={{marginTop: 10}}>
          <CustomAppButton
            onPress={() => Alert.alert('Button pressed')}
            title="Modifier"
            paddingHorizontal={5}
            paddingVertical={10}
            borderRadius={5}
            textFontSize={18}
            bkgroundColor="#4d8fd9"
            alignSelf="stretched"
            marginHorizontal={22}
            iconComponent={
              <View>
                <FontAwesome5 name="user-edit" size={15} color={'white'} />
              </View>
            }
          />
        </View>
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
  circleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 999,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 5,
  },
});

export default CustomAppButtonDemo;
