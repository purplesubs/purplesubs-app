import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ServiceWidget from '../components/ServiceWidget'
import PlanTypeWidget from '../components/PlanTypeWidget'

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
    },
    contentContainer: {
        paddingTop: 30,
    },
    serviceWidgetContainer: {
        flexDirection: 'row'
    },
    serviceWidget: {
        marginLeft: 24,
    },
    planTypeWidget: {
        marginRight: 24,
        marginLeft: 8,
        flex: 1,
    }
});
