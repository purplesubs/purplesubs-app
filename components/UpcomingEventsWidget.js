import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, display, textStyles} from '../constants/StyleSheet'
import Widget from './Widget';

export default function UpcomingEventsWidget(props) {

    let buildSpendService = (key, item) =>
        <View key={key} style={styles.spendServicesContainer}>
            <View style={styles.servicesPercentageContainer}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.renews}><Text
                    style={styles.renewsBold}>Renews</Text> for {item.amount} {item.currency} monthly</Text>
            </View>
            <View style={[styles.badgeTime, !item.isNearToPay && {backgroundColor: colors.whatsappbrandcolor}]}><Text
                style={styles.badgeText}>in {item.count} {item.frequency}</Text></View>
        </View>;

    let spend = <View style={styles.componentContainer}>
        {props.spendService.map((item, key) => buildSpendService(key, item))}
    </View>;

    return (
        <View style={[props.style, styles.container]}>
            <Widget title={props.title} subTitle={props.subTitle} component={spend}/>
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer: {
        marginTop: 12
    },
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
        color: colors.secondarylighten1,
        fontSize: 18
    },
    renews: {
        color: colors.secondarylighten1,
        fontSize: 14,
        marginLeft: 8
    },
    renewsBold: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    servicesPercentageContainer: {
        flexDirection: 'row',
    },
    spendCountContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    badgeTime: {
        width: 90,
        color: colors.secondarylighten1,
        backgroundColor: colors.warming,
        fontSize: 14,
        padding: 6,
        borderRadius: 6
    },
    badgeText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
    image: {
        height: 22,
        width: 22,
    },
});