import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/services/ServiceList'
import HeaderProfile from '../components/header/HeaderProfile'
import {colors, display, textStyles} from '../constants/StyleSheet'
import ServiceRow from "../components/ServiceRow";
import TextBox, {TextBoxTypes} from "../components/TextBox";
import SearchTextBox from "../components/SearchTextBox";


export default function AddServiceScreen(props) {

    let language = "en"

    let serviceGroups = [{
        id: 'popular',
        name: 'Popular',
        selected: true,
        onPress: () => alert("alert All")
    }, {
        id: 'all',
        name: 'All',
        selected: false,
        onPress: () => alert("alert All")
    }];

    let order = Object.keys(props.popularServices) //Array of keys

    return (
        <View style={styles.container}>
            <Text style={[styles.title, textStyles.mainTitle]}>Add Service</Text>

            <SearchTextBox
                     style={styles.searchTextBox}
                     placeholder={"Search"}
                     onPress={() => ""}
                     required={true}
                     hasError={false}
                     hasHelpTextUpperCase={false}
                     autoCapitalize="none"
                     labelError={"Email is required"}
                     helpText={"Example: example@gmail.com"}
            />

            <SimpleTabBar style={styles.simpleTabBar} tabs={serviceGroups}/>
            <View style={styles.list}>
                <ServiceList>
                    {props.popularServices.map(item => <ServiceRow key={item.id} {...item}/>)}
                </ServiceList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.secondaryLighten7,
        paddingHorizontal: 16,
    },
    list: {
        flex:1,
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: display.MARGIN_EXTRA_LARGE,
    },
    simpleTabBar: {
        maxHeight: 36,
        minHeight: 36,
        marginTop: display.MARGIN_DEFAULT,
        marginBottom: display.MARGIN_DEFAULT,
    },
    searchTextBox: {
        marginTop: 15
    },
});