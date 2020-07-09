import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Image, findNodeHandle} from 'react-native';
import {colors, display, icons, textStyles} from '../constants/StyleSheet'
import {Ionicons} from "@expo/vector-icons";

const SearchTextBox = (props) => {

    const [text, setText] = useState("");
    const [borderColor, setBorderColor] = useState(colors.secondaryLighten5);

    const onChangeText = (text) => {
        setText(text)
    }

    return (
        <View style={[styles.container, props.style]}>

            <View
                style={[styles.textBoxContainer, props.textBoxStyle, {borderColor: borderColor}]}>
                <Ionicons
                    style={styles.searchIcon}
                    name={icons.SEARCH}
                    size={20}
                    color={colors.secondaryLighten10}
                />
                <TextInput
                    editable={!props.disabled}
                    style={[styles.textInput, textStyles.inputTextEnabled]}
                    onChangeText={onChangeText}
                    value={text && text.toString()}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.secondaryLighten10}
                    autoCorrect={false}
                    autoCapitalize={props.autoCapitalize}
                    textAlignVertical={"top"}
                    // underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    textBoxContainer: {
        paddingHorizontal: 8,
        paddingVertical: 0,
        borderRadius: 4,
        backgroundColor: colors.secondaryLighten9,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    searchIcon: {
        marginTop: 6,
    },
    textInput: {
        minHeight: 20,
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 0,
        marginLeft: 8
    },
});

export default SearchTextBox


