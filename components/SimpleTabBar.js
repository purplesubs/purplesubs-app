import * as React from 'react';
import {StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../constants/StyleSheet'

export default function SimpleTabBar(props) {

    let buildTab = (item, key) => <TouchableOpacity
        key={key}
        style={[styles.tab, item.selected && styles.tabSelected]}
        onPress={item.onPress}>
        <Text style={[styles.text, item.selected && styles.textSelected]}>{item.name}</Text>
    </TouchableOpacity>;

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[props.style, styles.container, styles.shadow]}>
            {props.tabs.map((item, key) => buildTab(item, key))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textSelected: {
        color: colors.secondaryLighten0,
        fontWeight: 'bold'
    },
    text: {
        color: colors.secondaryLighten3,
        fontSize: 12,
    },
    tab: {
        backgroundColor: colors.secondaryLighten7,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 5
    },
    tabSelected: {
        backgroundColor: colors.clean
    }
});