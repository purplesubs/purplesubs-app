import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, display, textStyles} from '../constants/StyleSheet'
import RowIcon from "../components/RowIcon";
import {AntDesign, MaterialIcons, Octicons, Ionicons} from '@expo/vector-icons';

export default function NewFormServiceScreen(props) {

    return (
        <View style={styles.container}>
            <View style={styles.amountContainer}>
                <Text style={[styles.amount, textStyles.mainTitle]}>9,99 {props.currency}</Text>
                <View style={[styles.icon, {
                    borderColor: colors.secondaryLighten4,
                    backgroundColor: colors.secondaryLighten6
                }]}>
                    <RowIcon
                        name={props.serviceSelected.icon}
                        size={34}
                        color={props.serviceSelected.color}
                    />
                </View>
            </View>
            <Text style={styles.name}>{props.serviceSelected.name}</Text>
            <Text style={styles.date}>Today, Fri, 3 July</Text>

            <TouchableOpacity style={styles.button}>
                <AntDesign name="plus" size={20} color="#2e65bf"/>
                <Text style={styles.buttonText}>Add service</Text>
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <View style={styles.formItemContainer}>
                    <Text style={styles.label}>Description</Text>
                    <View style={[styles.item]}>
                        <MaterialIcons name="edit" size={20} color="#1268e7" />
                        <Text style={styles.itemText}>Add description</Text>
                    </View>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>First bill</Text>
                    <View style={[styles.item]}>
                        <Octicons name="calendar" size={20} color="#1268e7" />
                        <Text style={styles.itemText}>20 January 2020</Text>
                    </View>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Cycle</Text>
                    <View style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Every 1 Month(s)</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7" />
                    </View>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Duration</Text>
                    <View style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Forever</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7" />
                    </View>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Remind me</Text>
                    <View style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Never</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7" />
                    </View>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Currency</Text>
                    <View style={[styles.item]}>
                        <Text style={styles.itemText}>EUR({props.currency})</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: display.MARGIN_LARGE,
        paddingHorizontal: display.MARGIN_DEFAULT,
    },
    itemSeparator: {
        marginTop: 30,
    },
    name: {
        color: colors.secondaryLighten0,
        fontSize: 16,
        marginTop: 6
    },
    date: {
        color: colors.secondaryLighten3,
        marginTop: 6
    },
    amount: {
        marginTop: 4
    },
    label: {
        color: colors.secondaryLighten3,
        fontSize: 14,
    },
    item: {
        flexDirection: 'row',
    },
    itemText: {
        color: '#2e65bf',
        fontSize: 16,
        marginLeft: 6,
    },
    itemTextLeft: {
        marginRight: 8,
    },
    icon: {
        borderWidth: 2,
        borderRadius: 24,
        paddingVertical: 3,
        paddingHorizontal: 4,
        paddingTop: 4
    },
    button: {
        marginTop: 30,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 18,
        backgroundColor: '#dfeeff',
        borderRadius: 6,
        alignSelf: 'flex-start'
    },
    buttonText: {
        color: '#1268e7',
        fontWeight: 'bold',
        marginTop: 2,
        marginLeft: 6,
    }
});