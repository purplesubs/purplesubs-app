import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SimpleTabBar from '../components/SimpleTabBar'
import ServiceList from '../components/ServiceList'
import HeaderProfile from '../components/HeaderProfile'
import {colors, display, textStyles} from '../constants/StyleSheet'
import {translations} from "../constants/translations";


export default function ServiceScreen(props) {

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
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('ServiceDetails')
    }, {
        id: 'apple',
        name: 'Apple',
        image: require('../assets/images/services/apple.png'),
        isEnabledNotify: true,
        yearlySpend: 20,
        nextPayment: 140,
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('ServiceDetails')
    }, {
        id: 'spotify',
        name: 'Spotify',
        image: require('../assets/images/services/spotify.png'),
        isEnabledNotify: true,
        yearlySpend: 20,
        nextPayment: 140,
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('ServiceDetails')
    }, {
        id: 'trello',
        name: 'Trello',
        image: require('../assets/images/services/trello.png'),
        isEnabledNotify: false,
        yearlySpend: 20,
        nextPayment: 140,
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('ServiceDetails')
    }, {
        id: 'google',
        name: 'Google',
        image: require('../assets/images/services/google.png'),
        isEnabledNotify: false,
        yearlySpend: 20,
        nextPayment: 140,
        updatedAt: '12/03/2020',
        onPress: () => props.navigation.navigate('ServiceDetails')
    }]

    let language = "en"

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={[styles.title, textStyles.mainTitle]}>{translations[language].services.list.title}</Text>

                <SimpleTabBar style={styles.simpleTabBar} tabs={planTypes}/>

                <ServiceList>
                    {services.map(item => <ServiceList.Item key={item.id} {...item}/>)}
                </ServiceList>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
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
