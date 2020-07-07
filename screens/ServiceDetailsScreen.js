import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/services/ServiceList'
import {colors, display, textStyles} from '../constants/StyleSheet'


export default function ServiceDetailsScreen() {

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
            <Text style={[styles.title, textStyles.mainTitle]}>Details</Text>
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
    },
    simpleTabBar: {
        // maxHeight: 36,
        // minHeight: 36,
        marginTop: display.MARGIN_DEFAULT,
        marginBottom: display.MARGIN_DEFAULT,
    }
});
