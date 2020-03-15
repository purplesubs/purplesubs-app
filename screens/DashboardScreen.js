import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ServiceWidget from '../components/ServiceWidget'
import PlanTypeWidget from '../components/PlanTypeWidget'
import SpendWidget from '../components/SpendWidget'
import UpcomingEventsWidget from '../components/UpcomingEventsWidget'
import Button from '../components/Button'
import * as ButtonType from '../components/ButtonType'

export default function DashboardScreen() {

    let planTypes = [{
        color: '#0047BB',
        name: 'Subscription',
        percentage: 92
    }, {
        color: '#BF0000',
        name: 'Plan per Use',
        percentage: 5
    }, {
        color: '#A7A7AC',
        name: 'No spend details',
        percentage: 3
    }];

    let spendService = [{
        image: require('../assets/images/services/netflix.png'),
        name: 'Netflix',
        currency: 'EUR',
        amount: 140,
        percentage: 80
    }, {
        image: require('../assets/images/services/apple.png'),
        name: 'Apple',
        currency: 'EUR',
        amount: 28,
        percentage: 10
    }, {
        image: require('../assets/images/services/spotify.png'),
        name: 'Netflix',
        currency: 'EUR',
        amount: 15,
        percentage: 6
    }, {
        image: require('../assets/images/services/trello.png'),
        name: 'Netflix',
        currency: 'EUR',
        amount: 6,
        percentage: 4
    }];

    let upcomingEvents = [{
        image: require('../assets/images/services/netflix.png'),
        name: 'Netflix',
        currency: 'EUR',
        amount: 12,
        count: 3,
        isNearToPay: false,
        frequency: 'days'
    }, {
        image: require('../assets/images/services/apple.png'),
        name: 'Apple',
        currency: 'EUR',
        amount: 14,
        count: 40,
        isNearToPay: true,
        frequency: 'days'
    }, {
        image: require('../assets/images/services/spotify.png'),
        name: 'Spotify',
        currency: 'EUR',
        amount: 14,
        count: 100,
        isNearToPay: true,
        frequency: 'days'
    }, {
        image: require('../assets/images/services/trello.png'),
        name: 'Trello',
        currency: 'EUR',
        amount: 9.99,
        count: 140,
        isNearToPay: true,
        frequency: 'days'
    }];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                {/*<View style={styles.serviceWidgetContainer}>*/}
                {/*    <ServiceWidget title="Services" count={4} style={styles.serviceWidget}/>*/}
                {/*    <PlanTypeWidget title="Plan type" style={styles.planTypeWidget} planTypes={planTypes}/>*/}
                {/*</View>*/}

                <SpendWidget title="Spend" subTitle="Next 12 months" style={styles.spendWidget} count={'2,340'}
                             currency={'EUR'} spendService={spendService}/>
                <UpcomingEventsWidget title="Upcoming events" style={styles.spendWidget} count={'2,340'}
                                      currency={'EUR'} spendService={upcomingEvents}/>

                <Button style={styles.addServiceButton} value={"Add Service"}
                        type={ButtonType.PRIMARY_FILLED}
                        onPress={() => alert("onPress")}/>
            </ScrollView>
        </View>
    );
}

DashboardScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 0,
        paddingRight: 0,
    },
    contentContainer: {
        paddingTop: 12,
    },
    spendWidget: {
        marginTop: 6
    },
    serviceWidgetContainer: {
        flexDirection: 'row'
    },
    serviceWidget: {
    },
    addServiceButton: {
        marginTop: 12
    },
    planTypeWidget: {
        marginLeft: 8,
        flex: 1,
    }
});
