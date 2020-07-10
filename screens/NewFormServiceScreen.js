import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, display, textStyles, icons} from '../constants/StyleSheet'
import RowIcon from "../components/RowIcon";
import SimpleButton, {SimpleButtonTypes} from "../components/SimpleButton";
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

            <SimpleButton type={SimpleButtonTypes.PRIMARY_FILLED} icon={icons.ADD}/>

            <View style={styles.formContainer}>
                <View style={[styles.formItemContainer]}>
                    <Text style={styles.label}>First bill</Text>
                    <TouchableOpacity style={[styles.item]}>
                        <Octicons name="calendar" size={20} color="#1268e7"/>
                        <Text style={styles.itemText}>20 January 2020</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Cycle</Text>
                    <TouchableOpacity style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Every 1 Month(s)</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7"/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Duration</Text>
                    <TouchableOpacity style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Forever</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7"/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Remind me</Text>
                    <TouchableOpacity style={[styles.item]}>
                        <Text style={[styles.itemText, styles.itemTextLeft]}>Never</Text>
                        <Ionicons name="ios-arrow-down" size={20} color="#1268e7"/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.formItemContainer, styles.itemSeparator]}>
                    <Text style={styles.label}>Currency</Text>
                    <TouchableOpacity style={[styles.item]}>
                        <Text style={styles.itemText}>EUR({props.currency})</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.formContainer}>
                <View style={styles.formItemContainer}>
                    <Text style={styles.label}>Description</Text>
                    <TouchableOpacity
                        style={[styles.item]}
                        onPress={props.onPressEditDescription}>
                        <MaterialIcons name="edit" size={20} color="#1268e7"/>
                        <Text style={styles.itemText}>Add description</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemValue}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. </Text>
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
        paddingVertical: display.MARGIN_MEDIUM,
        paddingHorizontal: display.MARGIN_MEDIUM,
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
        fontSize: 15,
        marginLeft: 6,
    },
    itemTextLeft: {
        marginRight: 8,
    },
    itemValue: {
        marginTop: 10,
    },
    icon: {
        borderWidth: 2,
        borderRadius: 24,
        paddingVertical: 3,
        paddingHorizontal: 4,
        paddingTop: 4
    },
});