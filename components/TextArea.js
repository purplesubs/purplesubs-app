import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from "../constants/StyleSheet";

const TextArea = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={[styles.container, styles.textBoxContainer, props.style]}>
            <TextInput
                multiline
                editable
                maxLength={40}
                numberOfLines={4}
                onChangeText={text => onChangeText(text)}
                placeholder={props.placeholder}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    textBoxContainer: {
        minHeight: 150,
        borderRadius: 4,
        borderColor: colors.secondaryLighten5,
        borderWidth: 1,
    },
});

export default TextArea;
