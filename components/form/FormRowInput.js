import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, icons} from "../../constants/StyleSheet";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";

const FormRowInput = (props) => {
    const [editing, setEditing] = React.useState(false);
    const [text, onChangeText] = React.useState(props.value);

    const buildInput = () => (<View style={styles.inputContainer}>
        <View style={styles.input}>
            <TextInput
                style={styles.textInput}
                maxLength={20}
                numberOfLines={4}
                onChangeText={text => onChangeText(text)}
                placeholder={props.placeholder}
                value={text}
                autoFocus={true}
                onEndEditing={onEndEditing}
            />
            <TouchableOpacity style={styles.closeIcon} onPress={onPressClean}>
                <Ionicons name={icons.CLOSE_CIRCLE} size={15} color={colors.secondaryLighten5}/>
            </TouchableOpacity>
        </View>
    </View>)

    const onPressEdit = () => {
        setEditing(true)
    }

    const onPressClean = () => {
        onChangeText('')
    }

    const onEndEditing = () => {
        props.onChangeText(text)
        setEditing(false)
    }

    const buildButton = () => (
        <TouchableOpacity style={[styles.row]} onPress={onPressEdit}>
            <MaterialIcons name={icons.EDIT} size={20} color={colors.primary}/>
            {props.value ? <Text style={styles.text}>{props.value} </Text> :
                <Text style={styles.placeholder}>{props.placeholder} </Text>}
        </TouchableOpacity>)

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.label}>{props.label}</Text>
            {editing ? buildInput() : buildButton()}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        minHeight: 23
    },
    label: {
        color: colors.secondaryLighten3,
        fontSize: 14,
    },
    text: {
        color: colors.primary,
        fontSize: 15,
        marginLeft: 6,
    },
    placeholder: {
        color: colors.primary,
        // color: '#73bef4',
        fontSize: 15,
        marginLeft: 6,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        paddingVertical: 2,
        flexDirection: 'row',
        maxWidth: 220
    },
    closeIcon: {
        marginTop: 2
    },
    textInput: {
        marginRight: 4,
        fontSize: 15,
        color: colors.primary,
        textAlign: 'right',

    }
});

export default FormRowInput;
