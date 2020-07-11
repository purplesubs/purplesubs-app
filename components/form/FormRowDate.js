import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, icons} from "../../constants/StyleSheet";
import {Ionicons, Octicons} from "@expo/vector-icons";

const FormRowDate = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.label}>{props.label}</Text>
            <TouchableOpacity style={[styles.row]} onPress={props.onPress}>
                <Text style={styles.text}>20 January 2020</Text>
                <Octicons style={styles.icon} name={icons.CALENDAR} size={20} color={colors.primary}/>
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
    },
    icon: {
        marginLeft: 8,
    }
});

export default FormRowDate;
