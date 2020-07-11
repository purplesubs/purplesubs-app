import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {colors} from '../constants/StyleSheet'
import * as ButtonType from './ButtonType'
import {AntDesign} from "@expo/vector-icons";

export default function SimpleButton(props) {

    const getButtonStyle = (type) => {
        switch (type) {
            case SimpleButtonTypes.PRIMARY_FILLED:
                return {
                    buttonStyle: {
                        backgroundColor: colors.primary,
                        borderWidth: 1,
                        borderColor: colors.primary,
                        alignSelf: 'flex-start',
                        minHeight: 36
                    },
                    textStyle: {
                        color: colors.clean,
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: colors.clean,
                };
            case SimpleButtonTypes.PRIMARY_LIGHT:
                return {
                    buttonStyle: {
                        backgroundColor: colors.primaryLighten2,
                        borderWidth: 1,
                        borderColor: colors.primaryLighten2,
                        alignSelf: 'flex-start',
                        minHeight: 36
                    },
                    textStyle: {
                        color: colors.primary,
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: colors.primary,
                };
            case SimpleButtonTypes.PRIMARY_BORDER:
                return {
                    buttonStyle: {
                        backgroundColor: colors.transparent,
                        borderWidth: 1,
                        borderColor: colors.primary,
                        alignSelf: 'flex-start',
                        minHeight: 36
                    },
                    textStyle: {
                        color: colors.primary,
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 6,
                    },
                    iconColor: colors.primary,
                };
            case SimpleButtonTypes.PRIMARY_FILLED_LARGE:
                return {
                    buttonStyle: {
                        backgroundColor: colors.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: colors.primary,
                        paddingVertical: 12,
                        shadowColor: colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    },
                    textStyle: {
                        color: colors.clean,
                        fontWeight: 'bold',
                        marginLeft: 6,
                        marginTop: 2,
                    },
                    iconColor: colors.clean,
                };
            case SimpleButtonTypes.PRIMARY_FILLED_ROUND:
                return {
                    buttonStyle: {
                        backgroundColor: colors.primary,
                        borderWidth: 1,
                        borderRadius: 18,
                        borderColor: colors.primary,
                        alignSelf: 'flex-start',
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                    },
                    textStyle: {
                        color: colors.clean,
                        fontWeight: 'bold',
                        marginTop: 2,
                        marginLeft: 4,
                    },
                    iconColor: colors.clean,
                };
        }
    }

    return (
        <TouchableOpacity
            style={[styles.container, getButtonStyle(props.type).buttonStyle, props.style]}
            onPress={props.onPress}>
            {props.icon && <AntDesign name={props.icon} size={20} color={getButtonStyle(props.type).iconColor}/>}
            <Text style={getButtonStyle(props.type).textStyle}>{props.name}</Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 6,
    },
});

export const SimpleButtonTypes = {
    PRIMARY_FILLED: "PRIMARY_FILLED",
    PRIMARY_FILLED_ROUND: "PRIMARY_FILLED_ROUND",
    PRIMARY_FILLED_LARGE: "PRIMARY_FILLED_LARGE",
    PRIMARY_BORDER: "PRIMARY_BORDER",
    PRIMARY_LIGHT: "PRIMARY_LIGHT",
}
