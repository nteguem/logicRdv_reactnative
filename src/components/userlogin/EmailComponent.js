import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../global/colors';
import CustomAppButton from '../global/CustomAppButton';

const EmailComponent = (props) => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
      <TextInput
        placeholder='Adresse email ou numéro de téléphone'
        placeholderTextColor={colors.gray}
        style={styles.input}
      />
      <View>
        <CustomAppButton
          title={props.button.title}
          onPress={props.button.onPress}
          bkgroundColor={colors.blue} 
          textColor={colors.white}
          paddingHorizontal={120}
          paddingVertical={10}
          borderRadius={10}
          textFontSize={15}
          fontWeight="bold"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor: colors.white,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 16,
        fontWeight: '500',
        color: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",
    },
    input:{
        borderRadius: 10,
        borderWidth: 1,
        marginVertical:10,
        fontSize: 16,
        textAlignVertical: 'center',
        borderColor:colors.gray,
        marginVertical:10,

    }
})
export default EmailComponent;