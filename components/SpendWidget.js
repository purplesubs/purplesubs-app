import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Widget from './Widget';

export default function SpendWidget(props) {

    let spendCount = <View style={styles.spendCountContainer}>
        <Image source={require('../assets/images/money.png')} style={styles.spendIcon}/>
        <Text style={styles.count}>{props.count} {props.currency}</Text>
    </View>;

    let largestExpenses = <View style={styles.largestExpensesContainer}>
        <Text style={styles.largestExpensesTitle}>{"largest expenses".toUpperCase()}</Text>
        <View style={styles.spendServicesContainer}>
            <View style={styles.servicesPercentageContainer}>
                <Image source={require('../assets/images/netflix.png')} style={styles.serviceIcon}/>
                <View style={styles.progressPercentage}/>
                <Text style={styles.percentage}>90 %</Text>
            </View>
            <Text style={styles.amount}>144 EUR</Text>
        </View>
    </View>;

    let spend = <View style={styles.componentContainer}>
        {spendCount}
        {largestExpenses}
    </View>;

    return (
        <View style={[props.style, styles.container]}>
            <Widget title={props.title} subTitle={props.subTitle} component={spend}/>
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer: {},
    largestExpensesContainer: {
        marginTop: 12
    },
    largestExpensesTitle: {},
    spendServicesContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        color: '#676578',
        fontSize: 18
    },
    percentage: {
        color: '#676578',
        marginTop: 6,
        fontSize: 14,
        marginLeft: 8
    },
    progressPercentage: {
        backgroundColor: '#0047BB',
        height: 10,
        width: 100,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15
    },
    servicesPercentageContainer: {
        flexDirection: 'row',
    },
    spendCountContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    count: {
        color: '#676578',
        fontSize: 24,
        marginTop: 8,
        marginLeft: 12,
    },
    spendIcon: {
        height: 50,
        width: 50,
    },
    serviceIcon: {
        height: 32,
        width: 32,
    },
});