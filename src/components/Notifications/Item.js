import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../global/colors';

const Item = (props) => { // Utilisation de props pour recevoir les propriétés du composant
  const { date, username, message } = props; // Extraction des propriétés de l'objet props

  return (
    <View style={styles.container}>
      <View style={styles.entete} >
        <View style={styles.element}>
          <Icon color={colors.blue} name="notifications" size={15} />
          <Text>{username}</Text>
        </View>
        <View style={styles.element}>
          <Icon color={colors.blue} name="calendar-today" size={15} />
          <Text>{date}</Text>
        </View>
      </View>
      <View>
        <Text>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginVertical:3,
        paddingHorizontal:10,
    },
    entete:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:10,
    },
    element:{
        flexDirection: 'row',
        alignItems: 'center',

    }, 
    username:{
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 15,
    }
   
})
export default Item;