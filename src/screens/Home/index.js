import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, TextInput, Button } from 'react-native';
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import FooterHome from '../../components/Search/FooterHome';
import Header from '../../components/Search/Header';
import SearchForm from '../../components/Search/SearchForm';
import { colors } from '../../components/global/colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Home = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [thisDate, setThisDate] = useState("");

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setThisDate(formatDateToString(date)); 
        hideDatePicker();
    };

    const formatDateToString = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    };

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
                                    <Button title="Show Date Picker" onPress={showDatePicker} />
                                    <TextInput
                                        placeholder="Date de naissance"
                                        placeholderTextColor="gray"
                                        maxLength={10}
                                        value={thisDate} 
                                        style={styles.textInput}
                                        onFocus={showDatePicker} 
                                        onChange={formatDateToString}
                                    />
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
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                theme={{
                    backgroundColor: "blue",
                    headerTextColor: "white",
                    headerBackgroundColor: "blue",
                    accentColor: "white",
                    textDayFontSize: 18,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 16,
                    textDayFontWeight: "bold",
                }}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
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
