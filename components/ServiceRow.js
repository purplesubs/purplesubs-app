import {StyleSheet, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import React from 'react';
import RowIcon from './RowIcon';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// import React, {useState, useEffect} from 'react';

export default function ServiceRow(props) {


    return (
        <TouchableOpacity
            style={styles.container}
            {...props.sortHandlers}
        >
            <View style={[styles.row,
                {
                    borderWidth: 1,
                    borderColor: props.data.color,
                }]}>
                <View style={styles.iconContainer}>
                    <RowIcon
                        style={styles.icon}
                        name={props.data.icon}
                        size={30}
                        color={props.data.color}
                    />
                    <Text style={[styles.text, {color: props.data.color}]}>{props.data.text}</Text>
                </View>
                <MaterialCommunityIcons
                    style={styles.action}
                    name={props.data.hasService ? 'plus' : 'check'}
                    size={20}
                    color={props.data.color}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
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
});