import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {colors, icons, display, textStyles} from '../../constants/StyleSheet'

export default function ModalDescriptionScreen(props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.onPressClose}>
                    <Ionicons style={styles.closeIcon} name={icons.CLOSE} size={36} color={colors.secondaryLighten0} />
                </TouchableOpacity>
            </View>
            <Text>ModalDescriptionScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        alignSelf:'flex-end'
    },
    closeIcon: {
        marginTop: 12,
        marginRight: 20
    }
});
