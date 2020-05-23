import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, display, textStyles, icons} from '../../constants/StyleSheet'

export default function HeaderProfile(props) {
    return (
        <View style={[props.style, styles.container, styles.shadow]}>
            <Image style={styles.avatar} source={icons.AVATAR}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: display.MARGIN_DEFAULT
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 15
    }
});