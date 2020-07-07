import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function ButtonHeader(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[props.style, styles.container]}>
            <Ionicons
                name={props.icon}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},

});