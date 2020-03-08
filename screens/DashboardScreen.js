import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ServiceWidget from '../components/ServiceWidget'
import PlanTypeWidget from '../components/PlanTypeWidget'
import SpendWidget from '../components/SpendWidget'

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

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                <View style={styles.serviceWidgetContainer}>
                    <ServiceWidget title="Services" count={4} style={styles.serviceWidget}/>
                    <PlanTypeWidget title="Plan type" style={styles.planTypeWidget} planTypes={planTypes}/>
                </View>
                <SpendWidget title="Spend" subTitle="Next 12 months"  style={styles.spendWidget} count={'2,340'} currency={'EUR'}/>

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
        paddingLeft: 12,
        paddingRight: 12,
    },
    contentContainer: {
        paddingTop: 30,
    },
    spendWidget: {
        marginTop: 8
    },
    serviceWidgetContainer: {
        flexDirection: 'row'
    },
    serviceWidget: {},
    planTypeWidget: {
        marginLeft: 8,
        flex: 1,
    }
});
