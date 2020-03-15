import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import {colors, display, textStyles} from '../constants/StyleSheet'


export default function ServiceScreen() {

    let planTypes = [{
        id: 'all',
        name: 'All',
        selected: true,
        onPress: () => alert("alert All")
    }, {
        id: 'subscription',
        name: 'Subs',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'plan-per-use',
        name: 'Plan per Use',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'lifetime',
        name: 'Lifetime',
        selected: false,
        onPress: () => alert("alert All")
    }, {
        id: 'free',
        name: 'Free',
        selected: false,
        onPress: () => alert("alert All")
    }];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={textStyles.mainTitle}>Services</Text>
                <SimpleTabBar tabs={planTypes}/>
            </ScrollView>
        </View>
    );
}

ServiceScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
    }
});
