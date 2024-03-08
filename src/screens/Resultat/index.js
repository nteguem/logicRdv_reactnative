import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import CustomText from '../../components/global/CustomText';
import Doctor from '../../components/global/Doctor';
import { colors } from '../../components/global/colors';
import { useRoute } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { infosDoctorRequest } from '../../redux/search/actions';

const SearchResult = ({ isLoading, isSearch = true, doctorInfos }) => {
  const { params } = useRoute();
  const { location, profession, searchall, civility, name, results, betweenSearch, city, proxy_nom_id } = params;
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
    if (isSearch) {
      return (
        <ScrollView>
          {result.map((item, index) => (
            item.civility === "Dr" && (
              <Doctor
                key={index}
                isProfileIcon={true}
                isSearch={true}
                isRightIcons={true}
                isPhoneIcons={true}
                isDelete={true}
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
        <CustomText color={colors.gray200}>Résultat de la recherche pour:</CustomText>
        <CustomText color={colors.black} fontWeight="bold">  {location || city}, {profession || name} </CustomText>
      </View>
      {isEmptySearch ? (
        <View style={styles.centered}>
          <CustomText color={colors.black}>Aucune donnée disponible pour cette recherche</CustomText>
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
});

const mapStateToProps = ({ SearchReducer }) => ({
  isLoading: SearchReducer?.isLoading,
  doctorInfos: SearchReducer?.doctorInfos
});
export default connect(mapStateToProps)(SearchResult);