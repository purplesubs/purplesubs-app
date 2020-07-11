import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors, icons, display, textStyles} from '../../constants/StyleSheet'
import TextArea from "../../components/TextArea";
import SimpleButton, {SimpleButtonTypes} from "../../components/SimpleButton";
import {translations} from "../../constants/translations";

export default function ModalDescriptionScreen(props) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={props.onPressClose}>
                    <Ionicons style={styles.closeIcon} name={icons.CLOSE} size={36} color={colors.secondaryLighten1}/>
                </TouchableOpacity>
            </View>

            <Text style={[styles.title, textStyles.mainTitle]}>Add description</Text>

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
    },
    title: {
        marginTop:20
    },
    closeIcon: {},
    textArea: {
        marginTop: 20,
    },
    button: {
        marginTop: 30,
    },
});
