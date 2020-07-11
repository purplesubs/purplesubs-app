import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RowIcon from '../RowIcon';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ServiceRow(props) {

    const buildPriceOrIcon = () => {
        return props.data.showPrice ? <View style={styles.priceContainer}>
            <Text style={[styles.price,{
                color: props.data.fill ? '#fff' : props.data.color
            }]}>{props.currency} {props.data.amount}
            </Text>
            </View> :
            <MaterialCommunityIcons
            style={styles.action}
            name={props.data.hasService ? 'check' : 'plus'}
            size={20}
            color={props.data.fill ? '#fff' : props.data.color}
        />
    }

    return (
        <TouchableOpacity
            style={styles.container}
            {...props.sortHandlers}
            onPress={props.data.onPress}
        >
            <View style={[styles.row,
                {
                    borderColor: props.data.color,
                    backgroundColor: props.data.fill ? props.data.color : '#fff',
                }]}>
                <View style={styles.iconContainer}>
                    <RowIcon
                        style={styles.icon}
                        name={props.data.icon}
                        size={30}
                        color={props.data.fill ? '#fff' : props.data.color}
                    />
                    <Text style={[styles.text,
                        {
                            color: props.data.fill ? '#fff' : props.data.color
                        }]}>{props.data.name}</Text>
                </View>
                {buildPriceOrIcon()}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 8,
        paddingVertical: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    icon: {
        // marginLeft: 8,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: 5,
    },
    action: {
        marginTop: 5,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    priceContainer: {
        flexDirection: 'column',
    },
    price: {
        fontSize: 16,
        marginTop: 7
    },
});