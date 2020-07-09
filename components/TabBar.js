import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../constants/StyleSheet'

export default function TabBar(props) {

    let buildTab = (item, key) => <TouchableOpacity
        key={key}
        style={[styles.tab, item.selected && styles.tabSelected]}
        onPress={item.onPress}>
        <Text style={[styles.text, item.selected && styles.textSelected]}>{item.name}</Text>
    </TouchableOpacity>;

    return (
        <View
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[props.style, styles.container, styles.shadow]}>
            {props.tabs.map((item, key) => buildTab(item, key))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.secondaryLighten51,
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 8,
    },
    textSelected: {
        color: colors.secondaryLighten0,
    },
    text: {
        color: colors.secondaryLighten3,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tab: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 8,
        marginRight: 5
    },
    tabSelected: {
        backgroundColor: colors.clean
    }
});