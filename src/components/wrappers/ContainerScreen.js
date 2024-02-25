import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../Header/Header';

const ContainerScreen = ({ children, backgroundColor }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header backgroundColor={backgroundColor} />
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f5f7',
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

export default ContainerScreen;
