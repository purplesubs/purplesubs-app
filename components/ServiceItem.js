import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, display, textStyles} from '../constants/StyleSheet'

export default function ServiceItem(props) {

    return (
        <TouchableOpacity style={[props.style, styles.mainContainer]}>
            <View style={[props.style, styles.container]}>
                <Image source={props.image} style={styles.serviceIcon}/>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // paddingTop: display.MARGIN_MEDIUM,
        // paddingRight: display.MARGIN_MEDIUM,
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    serviceIcon: {
        width: 32,
        height: 32,
    }
});