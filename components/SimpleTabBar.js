import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../constants/StyleSheet'

export default function SimpleTabBar(props) {

    let buildTab = (item, key) => <TouchableOpacity key={key} style={styles.tab} onPress={item.onPress}>
        <Text style={[styles.text, item.selected && styles.textSelected]}>{item.name}</Text>
    </TouchableOpacity>;

    return (
        <View style={[props.style, styles.container, styles.shadow]}>
            {props.tabs.map((item, key) => buildTab(item, key))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textSelected: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    text: {
        color: colors.secondaryLighten3,
        fontSize: 12,
    },
    tab: {
        backgroundColor: colors.secondaryLighten7,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 5
    }
});