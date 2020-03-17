import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/ServiceList'
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

    let services = [{
        id: 'netflix',
        name: 'Netflix',
        image: require('../assets/images/services/netflix.png'),
        isEnabledNotify: false,
        yearlySpend: 20,
        nextPayment: 140,
        currency: 'EUR'
    }, {
        id: 'apple',
        name: 'Apple',
        image: require('../assets/images/services/apple.png'),
        isEnabledNotify: true,
        yearlySpend: 20,
        nextPayment: 140,
        currency: 'EUR'
    }, {
        id: 'spotify',
        name: 'Spotify',
        image: require('../assets/images/services/spotify.png'),
        isEnabledNotify: true,
        yearlySpend: 20,
        nextPayment: 140,
        currency: 'EUR'
    }, {
        id: 'trello',
        name: 'Trello',
        image: require('../assets/images/services/trello.png'),
        isEnabledNotify: false,
        yearlySpend: 20,
        nextPayment: 140,
        currency: 'EUR'
    }, {
        id: 'google',
        name: 'Google',
        image: require('../assets/images/services/google.png'),
        isEnabledNotify: false,
        yearlySpend: 20,
        nextPayment: 140,
        currency: 'EUR'
    }]

    let currency = "EUR"

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={[styles.title, textStyles.mainTitle]}>Services</Text>

                <SimpleTabBar style={styles.simpleTabBar} tabs={planTypes}/>

                <ServiceList>
                    {services.map(item => <ServiceList.Item key={item.id} {...item}/>)}
                </ServiceList>

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
        paddingTop: 10,
    },
    title: {
        marginLeft: display.MARGIN_DEFAULT,
    },
    simpleTabBar: {
        marginLeft: display.MARGIN_SMALL,
        marginTop: display.MARGIN_DEFAULT,
        marginBottom: display.MARGIN_SMALL,
    }
});
