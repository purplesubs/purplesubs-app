import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {colors, display, textStyles} from '../constants/StyleSheet'

export default function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={30}
            style={{marginBottom: -3}}
            color={props.focused ? colors.primary : colors.secondarylighten3}
        />
    );
}
