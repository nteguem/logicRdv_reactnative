import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { getCountries } from '../redux/country/actions'; // Action pour récupérer la liste des pays
import { Picker } from '@react-native-picker/picker';

const CountriesListScreen = ({ navigation, countries, loadingCountries }) => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    dispatch(getCountries()); // Dispatch de l'action pour récupérer la liste des pays
  }, [dispatch]);

  const handleCountryChange = country => {
    setSelectedCountry(country);
    // Vous pouvez ajouter d'autres logiques ici si nécessaire
  };

  if (loadingCountries) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={handleCountryChange}
          style={styles.picker}
        >
          <Picker.Item label="Select a country" value="" />
          {countries.map(country => (
            <Picker.Item key={country.name.common} label={country.name.common} value={country.name.common} />
          ))}
        </Picker>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: '80%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ CountryReducer }) => ({
  countries: CountryReducer.countries,
  loadingCountries: CountryReducer.loadingCountries,
});

export default connect(mapStateToProps)(CountriesListScreen);
