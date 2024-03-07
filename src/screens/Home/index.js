import React from 'react';
import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import FooterHome from '../../components/Search/FooterHome';
import Header from '../../components/Search/Header';
import SearchForm from '../../components/Search/SearchForm';

const Home = () => {
    return (
        <>
            <ContainerScreen backgroundColor='white'>
                <ImageBackground source={require('../../assets/images/background.png')} style={styles.backgroundImage}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {/* <Header isHome /> */}
                        <SearchForm borderRadius={12} />
                    </ScrollView>
                </ImageBackground>
            </ContainerScreen>
            <View style={styles.footerContainer}>
                <FooterHome />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
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
