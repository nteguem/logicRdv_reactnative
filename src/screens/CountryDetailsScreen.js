// CountryDetailsScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails } from '../redux/country/actions';

const CountryDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { countryId } = route.params;
  const countryDetails = useSelector(state => state.countryDetails);

  useEffect(() => {
    dispatch(getCountryDetails(countryId));
  }, [dispatch, countryId]);

  return (
    <View>
      {countryDetails && (
        <View>
          <Text>Nom: {countryDetails.name}</Text>
          <Text>Code alpha-2: {countryDetails.alpha2Code}</Text>
          <Text>Capitale: {countryDetails.capital}</Text>
          {/* Ajoutez d'autres détails du pays selon vos besoins */}
        </View>
      )}
    </View>
  );
};

export default CountryDetailsScreen;
