import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import CustomText from '../../components/global/CustomText';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';
import { useRoute } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { infosDoctorRequest } from '../../redux/search/actions';

const SearchResult = ({ isLoading, isSearch = true }) => {
  const { params } = useRoute();
  const { location, profession, searchall, name, results, city, proxy_nom_id } = params;
  const result = searchall || results;
  const isEmptySearch = !result || result.length === 0;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(infosDoctorRequest({ "id": proxy_nom_id }));
  }, []);

  const handleDoctorPress = (doctorDetails) => {
    navigation.navigate('Détail du médécin', doctorDetails);
  };


  const renderContent = () => {
    const tas = result.length
    if (tas === 1){
      return(
        <View style={styles.centered}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.image} />
          <CustomText fontSize={12} color={colors.blue100} fontWeight='bold'>Aucunes données pour le moment.</CustomText>
        </View>
      )
    }
    if (isSearch) {
      return (
        <ScrollView>
          {result.map((item, index) => (
            item.civility === "Dr" && item.nom !== "Affiner ma recherche ..." && (
              <Doctor
                key={index}
                isProfileIcon={true}
                isSearch={true}
                isRightIcons={true}
                isPhoneIcons={true}
                isDelete={true}
                lat={item.lat}
                lng={item.lng}
                texte1={`${item.civility} ${item.nom}`}
                texte2={item.category}
                texte3={item.address}
                texte4={`${item.zip} ${item.city}`}
                texte5={item.tel}
                colorContain={colors.blue}
                colorTitle={colors.yellow}
                handleChange={() => handleDoctorPress({
                  civility: item.civility,
                  name: item.nom,
                  profession: item.category,
                  adresse: item.address,
                  zip: item.zip,
                  city: item.city,
                  tel: item.tel,
                  proxy_ville_id: item.id_city,
                  proxy_nom_id: item.id
                })}
              />
            )
          ))}
        </ScrollView>
      );
    } else {
      return (
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
              handleChange={() => handleDoctorPress({
                civility: item.civility,
                name: item.nom,
                profession: item.category,
                adresse: item.address,
                zip: item.zip,
                city: item.city,
                tel: item.tel,
                proxy_ville_id: item.id_city,
                proxy_nom_id: item.id
              })}
              fontWeight={'bold'}
              isPhoneIcons
              isProfileIcon
              isRightIcons
              isDelete
              isSearch
            />
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <ContainerScreen isLoading={isLoading}>
      <View style={styles.header}>
        <CustomText fontSize={12} color={colors.gray200}>Résultat de la recherche pour:</CustomText>
        <CustomText fontSize={14} color={colors.black} fontWeight="bold">{location || city}, {profession || name} </CustomText>
      </View>
      {isEmptySearch ? (
        <View style={styles.centered}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.image} />
          <CustomText fontSize={12} color={colors.blue100} fontWeight='bold'>Aucunes données pour le moment.</CustomText>
        </View>
      ) : renderContent()}
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: -10,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  image: {
    objectFit: 'contain',
    width: 130,
    height: 60
  }
});

const mapStateToProps = ({ SearchReducer }) => ({
  isLoading: SearchReducer?.isLoading,
  doctorInfos: SearchReducer?.doctorInfos
});
export default connect(mapStateToProps)(SearchResult);