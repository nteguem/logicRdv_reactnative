import React, { useRef, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../global/colors';
import Icon from 'react-native-vector-icons/Entypo';

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  multiline = false,
  keyboardType,
  maxLength,
  showCrossIcon = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  Animated.timing(animatedIsFocused, {
    toValue: isFocused || value !== '' ? 1 : 0,
    duration: 200,
    useNativeDriver: false,
  }).start();

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  const handleLabelPress = () => {
    setIsFocused(true);
    // Focus the input field programmatically
    inputRef.current.focus();
  };

  const inputRef = useRef(null);

  const clearText = () => {
    onChangeText(''); // Effacer le texte
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        onPress={handleLabelPress}
        style={[labelStyle, styles.label]}>
        {label}
      </Animated.Text>
      <View>
        <TextInput
          ref={inputRef}
          style={[styles.input, multiline && styles.multilineInput]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={maxLength}
          {...rest}
        />
        {showCrossIcon && value !== '' && (
          <TouchableOpacity onPress={clearText}>
            <Icon name="cross" size={24} color={colors.gray} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const ValidationInfoCompletionForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [reasonForAppointment, setReasonForAppointment] = useState('');

  const handleDateChange = text => {
    // Supprimer tout sauf les chiffres et le caractère "/"
    const formattedText = text.replace(/[^\d/]/g, '');

    // Vérifier si la longueur est inférieure à 11 pour correspondre au format "dd/mm/yyyy"
    if (formattedText.length <= 10) {
      // Si la longueur est de 2 ou 5, ajoutez automatiquement "/"
      if (formattedText.length === 2 || formattedText.length === 5) {
        if (formattedText.charAt(formattedText.length - 1) !== '/') {
          setDateOfBirth(formattedText + '/');
        } else {
          setDateOfBirth(formattedText);
        }
      } else {
        setDateOfBirth(formattedText);
      }
    }
  };

  const clearText = () => {
    setDateOfBirth('');
    setSecurityNumber('');
  };

  return (
    <SafeAreaView>
      <View style={styles.card}>
        <View style={styles.compartment}>
          <FloatingLabelInput
            label="Date de naissance"
            value={dateOfBirth}
            onChangeText={handleDateChange}
            placeholderTextColor="gray"
            maxLength={10}
            keyboardType="numeric"
            showCrossIcon
          />
          <FloatingLabelInput
            label="Numéro de sécurité social"
            value={securityNumber}
            onChangeText={setSecurityNumber}
            placeholderTextColor="gray"
            showCrossIcon
          />
          <FloatingLabelInput
            label="Motif du Rdv"
            value={reasonForAppointment}
            onChangeText={setReasonForAppointment}
            placeholderTextColor="gray"
            numberOfLines={6}
            maxLength={40}
            multiline
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  compartment: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    gap: 20,
  },
  container: {
    position: 'relative',
  },
  input: {
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    color: colors.black,
    fontSize: 18,
    borderRadius: 6,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  multilineInput: {
    textAlignVertical: 'top',
    height: 150,
    fontWeight: '500',
  },
  label: {
    zIndex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  icon: {
    position: 'absolute',
    marginRight: 10,
    right: 10,
    top: '10%',
    transform: [{ translateY: -35 }]
  },
});

export default ValidationInfoCompletionForm;