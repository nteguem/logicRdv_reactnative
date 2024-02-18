import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Header/Header';
const ContainerScreen = ({ children }) => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                {children}
            </View>
        </>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f5f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ContainerScreen;
