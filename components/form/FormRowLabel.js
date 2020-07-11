import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, icons} from "../../constants/StyleSheet";
import {Ionicons} from "@expo/vector-icons";

const FormRowLabel = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.label}>{props.label}</Text>
            <TouchableOpacity style={[styles.row]}>
                <Text style={[styles.text]}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
    }
});

export default FormRowLabel;
