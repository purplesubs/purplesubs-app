import React from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
import {colors, display} from "../../constants/StyleSheet";

const Form = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={[styles.container, styles.textBoxContainer, props.style]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: colors.clean,
        borderRadius: 10,
        paddingVertical: display.MARGIN_MEDIUM,
        paddingHorizontal: display.MARGIN_MEDIUM,
    }
});

export default Form;
