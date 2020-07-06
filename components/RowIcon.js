import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import {MaterialCommunityIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {colors, display, textStyles} from '../constants/StyleSheet'

export default function RowIcon(props) {

    const icons = [{
        name: 'netflix',
        type: 'MaterialCommunityIcons',
    }, {
        name: 'spotify',
        type: 'MaterialCommunityIcons',
    }, {
        name: 'dribbble',
        type: 'AntDesign',
    }, {
        name: 'dropbox',
        type: 'AntDesign',
    }]

    const renderIcon = (name) => {
        const icon = icons.find(i => i.name === name)
        switch (icon.type) {
            case 'AntDesign':
                return <AntDesign
                    style={[props.style, styles.container]}
                    name={icon.name}
                    size={props.size}
                    color={props.color}
                />;
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons
                    style={[props.style, styles.container]}
                    name={icon.name}
                    size={props.size}
                    color={props.color}
                />;

        }

    }

    return renderIcon(props.name)
}


const styles = StyleSheet.create({
    container: {
    },

});