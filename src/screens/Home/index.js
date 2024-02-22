import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import FooterHome from '../../components/Search/FooterHome';
import Header from '../../components/Search/Header';
import SearchForm from '../../components/Search/SearchForm';
import { colors } from '../../components/global/colors';

const Home = () => {
    return (
        <ContainerScreen backgroundColor='white'>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <SearchForm />
                <View style={styles.footerContainer}>
                    <FooterHome />
                </View>
            </ScrollView>
        </ContainerScreen>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 70, 
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
    },
});

export default Home;
