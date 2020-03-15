import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, display, textStyles} from '../constants/StyleSheet'

export default function Widget(props) {
    return (
        <View style={[props.style, styles.container, styles.shadow]}>
            <View style={styles.titleContainer}>
                <Text style={textStyles.mainTitle}>{props.title}</Text>
              {props.subTitle}
            </View>
            {props.component}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shadow: {
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    }
});