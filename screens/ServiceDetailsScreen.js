import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/ServiceList'
import HeaderProfile from '../components/HeaderProfile'
import {colors, display, textStyles} from '../constants/StyleSheet'


export default function ServiceDetailsScreen() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text>ertert</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});
