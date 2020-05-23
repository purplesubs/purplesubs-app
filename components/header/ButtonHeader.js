import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, display, textStyles, icons} from '../../constants/StyleSheet'
import {Ionicons} from '@expo/vector-icons';

export default function ButtonHeader(props) {
    return (
        <TouchableOpacity style={[props.style, styles.container]}>
            <Ionicons
                name={props.icon}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // paddingRight: display.MARGIN_DEFAULT,
        // paddingLeft: display.MARGIN_DEFAULT
    },

});