import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import CustomText from '../../components/global/CustomText';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';
import { useRoute } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { infosDoctorRequest, resultRequest } from '../../redux/search/actions';

const SearchResult = ({ route, isLoading, results }) => {
  const { location, profession, item, isSearchAround } = route.params;
  const proxy_ville = isSearchAround ? `${item.zip} ${item.city}` : location;
  const proxy_nom = isSearchAround ? item.category : profession;

  useEffect(() => {
    const cleanup = () => {
      dispatch({ type: 'CLEAR_RESULTS' }); // Action à dispatcher pour vider les résultats
    };

    // Appel de la fonction de nettoyage lorsque le composant est démonté
    return cleanup;
  }, []);
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDoctorPress = (result) => {
    console.log("result::::", result)
    navigation.navigate('Détail du médécin', {result});
  };

  const renderContent = () => {
    return isSearchAround ? (
      <ScrollView>
        {results.map((result, index) => (
          <Doctor
            key={index}
            lat={result.lat}
            lng={result.lng}
            texte1={`${result.civility} ${result.nom}`}
            texte2={result.category}
            texte3={result.address}
            texte4={`${result.zip} ${result.city}`}
            texte5={result.tel}
            texte6={result.km_diff && (`à ${result.km_diff} km`)}
            colorTitle={colors.yellow}
            colorContain={colors.blue}
            handleChange={() => handleDoctorPress(result)}
            fontWeight={'bold'}
            isPhoneIcons
            isProfileIcon
            isRightIcons
            isDelete
            isSearch
          />
        ))}
      </ScrollView>
    ) : (
      <ScrollView>
        {results.map((result, index) => (
          result.nom !== "Affiner ma recherche ..." && (
            <Doctor
              key={index}
              isProfileIcon={true}
              isSearch={true}
              isRightIcons={true}
              isPhoneIcons={true}
              lat={result.lat}
              lng={result.lng}
              texte1={`${result.civility} ${result.nom}`}
              texte2={result.category}
              texte3={result.address}
              texte4={`${result.zip} ${result.city}`}
              texte5={result.tel}
              colorContain={colors.blue}
              colorTitle={colors.yellow}
              handleChange={() => handleDoctorPress(result)}
            />
          )
        ))}
      </ScrollView>
    )
  }

  return (
    <ContainerScreen isLoading={isLoading}>
      <View style={styles.header}>
        <CustomText fontSize={14} color={colors.gray200}>Résultat de la recherche pour:</CustomText>
        <CustomText fontSize={14} color={colors.black} fontWeight="bold">{isSearchAround ? `${item.city} ${item.nom}` : proxy_ville}, {proxy_nom} </CustomText>
      </View>
      {results.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Image source={require('../../assets/images/favicon.jpg')} style={styles.image} />
          <CustomText color={colors.blue}>Aucune donnée disponible</CustomText>
        </View>
      ) : (
        renderContent()
      )}
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: -10,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  noDataContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 5
  }
});

const mapStateToProps = ({ SearchReducer }) => ({
  isLoading: SearchReducer?.isLoading,
  results: SearchReducer?.results,
});

export default connect(mapStateToProps)(SearchResult);