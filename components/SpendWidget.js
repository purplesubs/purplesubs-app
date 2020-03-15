import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Widget from './Widget';
import {colors, display, textStyles} from '../constants/StyleSheet'


export default function SpendWidget(props) {

    let spendCount = <View style={styles.spendCountContainer}>
        <Image source={require('../assets/images/money.png')} style={styles.spendIcon}/>
        <Text style={styles.count}>{props.count} {props.currency}</Text>
    </View>;

    let buildSpendService = (key, item) =>
        <View key={key} style={styles.spendServicesContainer}>
            <View style={styles.servicesPercentageContainer}>
                <Image source={item.image} style={styles.serviceIcon}/>
                <View style={[styles.progressPercentage, {width: item.percentage}]}/>
                <Text style={styles.percentage}>{item.percentage} %</Text>
            </View>
            <Text style={styles.amount}>{item.amount} {item.currency}</Text>
        </View>;

    let largestExpenses = <View style={styles.largestExpensesContainer}>
        <Text style={styles.largestExpensesTitle}>{"largest expenses".toUpperCase()}</Text>
        {props.spendService.map((item, key) => buildSpendService(key, item))}
    </View>;

    let spend = <View style={styles.componentContainer}>
        {spendCount}
        {largestExpenses}
    </View>;

    let spendActions = <View style={styles.subTitleContainer}>
        <View style={styles.subTitleContainerItem}>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
        <View style={styles.subTitleContainerItem}>
            <Text style={[styles.subTitle, styles.subTitleSelected]}>{props.subTitle}</Text>
        </View>
    </View>


    return (
        <View style={[props.style, styles.container]}>
            <Widget title={props.title} subTitle={spendActions} component={spend}/>
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer: {},
    largestExpensesContainer: {
        marginTop: 14
    },
    largestExpensesTitle: {
        color: colors.secondarylighten1,
    },
    spendServicesContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        color: colors.secondarylighten1,
        fontSize: 18
    },
    percentage: {
        color: colors.secondarylighten1,
        marginTop: 3,
        fontSize: 14,
        marginLeft: 8
    },
    progressPercentage: {
        backgroundColor: colors.primary,
        height: 10,
        borderRadius: 5,
        marginTop: 6,
        marginLeft: 15
    },
    servicesPercentageContainer: {
        flexDirection: 'row',
    },
    spendCountContainer: {
        flexDirection: 'row',
        marginTop: 14
    },
    count: {
        fontSize: 24,
        marginTop: 8,
        marginLeft: 12,
    },
    spendIcon: {
        height: 50,
        width: 50,
    },
    serviceIcon: {
        height: 22,
        width: 22,
    },
    subTitle: {
        color: colors.secondarylighten1,
        fontSize: 12,
        fontWeight: 'bold'
    },
    subTitleContainer: {
        flexDirection: 'row',
    },
    subTitleSelected: {
        color: colors.primary
    },
    subTitleContainerItem: {
        backgroundColor: colors.secondarylighten7,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 3
    }
});