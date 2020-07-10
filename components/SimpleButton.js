import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {colors} from '../constants/StyleSheet'
import * as ButtonType from './ButtonType'
import {AntDesign} from "@expo/vector-icons";

export default function SimpleButton(props) {

    const getButtonStyle = (type) => {
        switch (type) {
            case ButtonType.PRIMARY_FILLED:
                return {
                    buttonStyle: {
                        backgroundColor: '#0865e6',
                        borderWidth: 1,
                        borderColor: '#0865e6',
                    },
                    textStyle: {
                        color: colors.clean,
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: colors.clean,
                };
            case ButtonType.PRIMARY_LIGHT:
                return {
                    buttonStyle: {
                        backgroundColor: '#dfeeff',
                        borderWidth: 1,
                        borderColor: '#dfeeff',
                    },
                    textStyle: {
                        color: '#1268e7',
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: '#2e65bf'
                };
            case ButtonType.PRIMARY_BORDER:
                return {
                    buttonStyle: {
                        backgroundColor: colors.transparent,
                        borderWidth: 1,
                        borderColor: '#0865e6',
                    },
                    textStyle: {
                        color: '#1268e7',
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: '#2e65bf'
                };
        }
    }

    return (
        <TouchableOpacity style={[styles.container, getButtonStyle(props.type).buttonStyle]}>
            <AntDesign name="plus" size={20} color={getButtonStyle(props.type).iconColor}/>
            <Text style={getButtonStyle(props.type).textStyle}>Add service</Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
});

export const SimpleButtonTypes = {
    PRIMARY_FILLED: "PRIMARY_FILLED",
    PRIMARY_BORDER: "PRIMARY_BORDER",
    PRIMARY_LIGHT: "PRIMARY_LIGHT",
}
