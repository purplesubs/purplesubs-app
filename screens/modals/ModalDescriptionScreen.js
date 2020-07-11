import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors, icons, display, textStyles} from '../../constants/StyleSheet'
import TextArea from "../../components/TextArea";
import SimpleButton, {SimpleButtonTypes} from "../../components/SimpleButton";

export default function ModalDescriptionScreen(props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.onPressClose}>
                    <Ionicons style={styles.closeIcon} name={icons.CLOSE} size={36} color={colors.secondaryLighten0}/>
                </TouchableOpacity>
            </View>

            <TextArea style={styles.textArea} placeholder={"Description"}/>

            <SimpleButton
                name={"Done"} style={styles.button}
                type={SimpleButtonTypes.PRIMARY_FILLED_LARGE}
                onPress={props.onPressDone}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    header: {
        alignSelf: 'flex-end'
    },
    closeIcon: {},
    textArea: {
        marginTop: 12,
    },
    button: {
        marginTop: 30,
    },
});
