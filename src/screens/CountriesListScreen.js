import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { getCountries } from '../redux/country/actions'; // Action pour récupérer la liste des pays

const CountriesListScreen = ({ navigation, countries }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries()); // Dispatch de l'action pour récupérer la liste des pays
    console.log("countries component", countries)
  }, [dispatch]);

  const handleCountryPress = country => {
    navigation.navigate('CountryDetailsScreen', { country }); // Navigation vers l'écran de détails du pays
  };

  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={item => item.name.common}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCountryPress(item)}>
            <Text>{item.name.common}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
};


const mapStateToProps = ({ CountryReducer }) => ({
  countries: CountryReducer.countries,
});

export default connect(mapStateToProps)(CountriesListScreen);


