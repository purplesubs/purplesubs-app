import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Widget from './Widget';

export default function PlanTypeWidget(props) {


    let buildItem = (key, color, name, percentage) =>
        <View key={key} style={styles.planTypeContainer}>
            <View style={styles.planTypeNameContainer}>
                <View style={[styles.circle, {backgroundColor: color,}]}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.percentage}>{percentage} %</Text>
        </View>;

    let planTypes = <View style={styles.container}>
        {props.planTypes.map((item, key) => buildItem(key, item.color, item.name, item.percentage))}
    </View>;

    return (
        <View style={[props.style, styles.container]}>
            <Widget title={props.title} component={planTypes}/>
        </View>
    );
}

const styles = StyleSheet.create({
    planTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    planTypeNameContainer: {
        flexDirection: 'row',
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 8,
        marginTop: 3,
    },
    name: {
        marginLeft: 6,
        fontSize: 16,
        color: '#676578'
    },
    percentage: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: '#676578',
    }
});