import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, icons} from "../../constants/StyleSheet";
import {MaterialIcons} from "@expo/vector-icons";

const FormRowTextArea = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.formItemContainer}>
                <Text style={styles.label}>Description</Text>
                <TouchableOpacity
                    style={[styles.row]}
                    onPress={props.onPress}>
                    <MaterialIcons name={icons.EDIT} size={20} color={colors.primary}/>
                    <Text style={styles.text}>{props.value ? props.actionText : props.placeholder}</Text>
                </TouchableOpacity>
            </View>
            {props.value && <Text style={styles.value}>{props.value} </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
    },
    label: {
        color: colors.secondaryLighten3,
        fontSize: 14,
    },
    text: {
        color: colors.primary,
        fontSize: 15,
        marginLeft: 6,
    },
    formItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    value: {
        marginTop: 10,
    }
});

export default FormRowTextArea;
