import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Image, findNodeHandle} from 'react-native';
import {colors, display, icons, textStyles} from '../constants/StyleSheet'
import PropTypes from 'prop-types';
import {Ionicons} from "@expo/vector-icons";

const TextBox = (props) => {

    const [text, setText] = useState("");
    const [borderColor, setBorderColor] = useState(colors.secondaryLighten5);
    const [showPass, setShowPass] = useState(false);

    const onChangeText = (text) => {
        if (props.type === TextBoxTypes.NUMBER) {
            text = text.trim()
        }
        setText(text)
    }

    const keyboardType = () => {
        let keyboardType = 'default'
        switch (props.type) {
            case TextBoxTypes.EMAIL:
                keyboardType = 'email-address'
                break;
            case TextBoxTypes.DOC_NUMBER:
            case TextBoxTypes.NUMBER:
            case TextBoxTypes.PHONE:
                keyboardType = 'numeric'
                break;
        }
        return keyboardType;
    }

    const onFocus = () => {
        if (props.onFocus) {
            props.onFocus()
        }
        setBorderColor(colors.primary)
    }

    const onBlur = () => {
        if (props.onBlur) {
            props.onBlur()
        }
        setBorderColor(colors.secondaryLighten5)
    }

    const onPressShowAndHidePass = () => {
        setShowPass(!showPass)
    }

    const buildLabelContainer = () => {
        const labelRequiredAst = props.required && <Text style={styles.labelRequiredAst}>*</Text>

        const label = props.label &&
            <Text
                style={[styles.label, textStyles.label]}>
                {props.label.toUpperCase()} {labelRequiredAst}
            </Text>

        const showAndHidePass = props.type === TextBoxTypes.PASSWORD &&
            <TouchableOpacity style={styles.showAndHidePassContainer} onPress={onPressShowAndHidePass}>
                <Text
                    style={[styles.showAndHideLabel, textStyles.label, {fontWeight: 'bold'}]}>
                    {!showPass ? "SHOW" : "HIDE"}
                </Text>
                <Ionicons
                    style={styles.labelErrorIcon}
                    name={!showPass ? icons.SHOW_PASS : icons.HIDE_PASS}
                    size={18}
                    color={colors.secondaryLighten4}/>
            </TouchableOpacity>


        return <View style={styles.labelContainer}>
            {label}
            {showAndHidePass}
        </View>
    }

    const buildTextInput = () => <TextInput
        editable={!props.disabled}
        style={[styles.textInput, textStyles.inputTextEnabled]}
        onChangeText={onChangeText}
        value={text && text.toString()}
        secureTextEntry={props.type === TextBoxTypes.PASSWORD && !showPass}
        placeholder={props.placeholder}
        placeholderTextColor={colors.secondaryLighten4}
        autoCorrect={false}
        autoCapitalize={props.autoCapitalize}
        keyboardType={keyboardType()}
        onBlur={onBlur}
        onFocus={onFocus}
        textAlignVertical={"top"}
    />
    // secureTextEntry={(this.props.type === TextBoxType.PASSWORD || this.props.type === TextBoxType.NUMERIC_PASSWORD) && this.state.showPass}

    const buildHelpText = () => ((props.helpText && !props.hasError) &&
        <Text style={[styles.helpText, textStyles.inputHelpText]}>
            {props.hasHelpTextUpperCase ? props.helpText.toUpperCase() : props.helpText}
        </Text>)

    const buildLabelError = () => (props.hasError &&
        <View style={styles.labelErrorContainer}>
            <Ionicons
                style={styles.labelErrorIcon}
                name={icons.ALERT_LABEL}
                size={18}
                color={colors.warming}/>
            <Text style={[styles.labelError, textStyles.validationError]}> {props.labelError.toUpperCase()} </Text>
        </View>)

    return (

        <View style={[styles.container, props.style]}>
            {buildLabelContainer()}
            <View pointerEvents={props.disabled ? 'none' : 'auto'}
                  style={[styles.textBoxContainer, props.textBoxStyle, {borderColor: borderColor}, (props.hasError && styles.textBoxContainerWithError)]}>
                {buildTextInput()}
            </View>
            {buildHelpText()}
            {buildLabelError()}

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 100
    },
    textInput: {
        minHeight: 30,
        padding: 0,
    },
    textBoxContainer: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
        borderColor: colors.secondaryLighten5,
        borderWidth: 1,
        marginTop: 8,
    },
    textBoxContainerWithError: {
        borderColor: colors.warming,
    },
    showAndHidePassContainer: {
        flexDirection: 'row',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelErrorContainer: {
        flexDirection: 'row-reverse',
        marginTop: 5,
        marginRight: 14,
    },
    labelErrorIcon: {
        marginLeft: 4,
    },
    labelError: {
        marginTop: 4,
    },
    helpText: {
        marginTop: 6,
    },
    labelRequiredAst: {
        color: colors.primary
    },
    showAndHideLabel: {
        fontWeight: 'bold',
    }
});

TextBox.propTypes = {
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    hasHelpTextUpperCase: PropTypes.bool,
    label: PropTypes.string,
    helpText: PropTypes.string,
    textBoxStyle: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    labelError: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextBox.defaultProps = {
    required: false,
    disabled: false,
    hasError: false,
    hasHelpTextUpperCase: true,
    label: ""
}

export default TextBox

export const TextBoxTypes = {
    PASSWORD: "password",
    EMAIL: "email",
    NUMBER: "number",
    DECIMAL: "decimal",
    DOC_NUMBER: "identification",
    PHONE: "phone"
}

