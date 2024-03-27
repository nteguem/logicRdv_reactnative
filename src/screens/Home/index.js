import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TextInput, Button } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import FooterHome from '../../components/Search/FooterHome';
import Header from '../../components/Search/Header';
import SearchForm from '../../components/Search/SearchForm';
import { colors } from '../../components/global/colors';

const Home = () => {
    return (
        <>
            <ContainerScreen backgroundColor={colors.white}>
                <ImageBackground source={require('../../assets/images/background.png')} style={styles.backgroundImage}>
                    <View>
                        <FlatList
                            contentContainerStyle={styles.scrollViewContent}
                            ListHeaderComponent={() =>
                            (
                                <View>
                                    <Header isHome />
                                    <SearchForm borderRadius={12} />
                                </View>
                            )
                            }
                        />
                    </View>
                </ImageBackground>
            </ContainerScreen>
            <View style={styles.footerContainer}>
                <FooterHome />
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        position: "relative",
        resizeMode: "cover",
        justifyContent: "center"
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    footerContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
});

export default Home;
