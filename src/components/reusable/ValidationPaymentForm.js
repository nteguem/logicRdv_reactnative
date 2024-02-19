import React, {useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Animated,
  useColorScheme,
} from 'react-native';
import {colors} from '../global/colors';

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  width,
  keyboardType,
  maxLength,
  ...rest
}) => {
  const colorScheme = useColorScheme(); // Utilisez le schéma de couleur actuel de l'appareil (clair ou sombre)
  const backgroundColor = colorScheme === 'dark' ? '#f5f6f8' : '#FFFFFF';
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
    left: 10,
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

  return (
    <View style={[styles.container, {width: width}]}>
      <Animated.Text
        onPress={handleLabelPress}
        style={[labelStyle, styles.label, {backgroundColor}]}>
        {label}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...rest}
      />
    </View>
  );
};

const ValidationPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleExpiryDateChange = text => {
    // Supprimer tout sauf les chiffres et le caractère "/"
    const formattedText = text.replace(/[^\d/]/g, '');

    // Vérifier si la longueur est inférieure à 5 pour correspondre au format "MM/YY"
    if (formattedText.length <= 5) {
      // Si la longueur est de 2, ajouter automatiquement le "/"
      if (formattedText.length === 2 && expiryDate.length === 1) {
        setExpiryDate(formattedText + '/');
      } else {
        setExpiryDate(formattedText);
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.compartment}>
        <FloatingLabelInput
          label="Numéro de la carte"
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholderTextColor="gray"
        />
        <View style={styles.containe}>
          <FloatingLabelInput
            label="Date expiration"
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            placeholderTextColor="gray"
            maxLength={5}
            keyboardType="numeric"
            width={45 + '%'}
          />
          <FloatingLabelInput
            label="cvv"
            value={cvv}
            onChangeText={setCVV}
            placeholderTextColor="gray"
            maxLength={3}
            keyboardType="numeric"
            width={45 + '%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compartment: {
    paddingVertical: 25,
    paddingHorizontal: 40,
    gap: 20,
    width: '100%',
  },
  container: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    color: colors.black,
    fontSize: 18,
    borderRadius: 6,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  label: {
    zIndex: 1,
    paddingHorizontal: 5,
  },
});

export default ValidationPaymentForm;
