import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/services/ServiceList'
import {colors, display, textStyles} from '../constants/StyleSheet'
import {translations} from "../constants/translations";


export default function UserDetailsScreen() {

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

    return (
        <View style={styles.container}>
            <Text style={[styles.title, textStyles.mainTitle]}>Add Subscription</Text>
            <SimpleTabBar style={styles.simpleTabBar} tabs={serviceGroups}/>

            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryLighten7,
        paddingHorizontal: 16,
    }
});
