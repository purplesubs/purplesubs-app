import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, icons} from "../../constants/StyleSheet";
import {Octicons} from "@expo/vector-icons";

const FormRowDate = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.label}>{props.label}</Text>
            <TouchableOpacity style={[styles.row]}>
                <Octicons name={icons.CALENDAR} size={20} color={colors.primary}/>
                <Text style={styles.text}>20 January 2020</Text>
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

export default FormRowDate;
