import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, display, textStyles} from '../constants/StyleSheet'
import TextBox, {TextBoxTypes} from '../components/TextBox'
import Button from "../components/Button";
import * as ButtonType from "../components/ButtonType";

export default function LoginScreen(props) {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.logo}>PurpleSubs</Text>


                <View style={styles.loginContainer}>
                    <Text style={[styles.title, textStyles.mainTitle]}>{"Sign in"}</Text>

                    <TextBox type={TextBoxTypes.EMAIL}
                             label={"Email"}
                             style={styles.emailTextBox}
                             placeholder={"Email"}
                             onPress={() => ""}
                             required={true}
                             hasError={false}
                             hasHelpTextUpperCase={false}
                             autoCapitalize="none"
                             labelError={"Email is required"}
                             helpText={"Example: example@gmail.com"}
                    />
                    <TextBox type={TextBoxTypes.PASSWORD}
                             label={"Password"}
                             style={styles.passwordTextBox}
                             placeholder={"Password"}
                             onPress={() => ""}
                             disabled={false}
                             required={false}
                             autoCapitalize="none"
                             hasError={false}
                             labelError={"First Name is required"}
                    />

                    <TouchableOpacity style={[styles.forgetPassword]} onPress={props.onPressForgotPassword}>
                        <Text style={textStyles.linkTextCenter}>
                            {"Forget password?".toUpperCase()}
                        </Text>
                    </TouchableOpacity>

                    <Button style={styles.loginButton} value={"Login"}
                            type={ButtonType.PRIMARY_FILLED}
                            animate={false}
                            onPress={() => alert("onPress")}/>

                    <View style={styles.createAccount}>
                        <Text style={[styles.registerText, textStyles.subHeaderCenter]}>
                            {"Don't have account?".toUpperCase()}
                        </Text>

                        <Button value={"REGISTER"}
                                type={ButtonType.PRIMARY_BORDER}
                                animate={false}
                                containerButtonStyle={styles.loginBtnContainer}
                                onPress={props.onPressRegister}/>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondaryLighten3
    },
    loginContainer: {
        paddingLeft: display.MARGIN_SMALL,
        paddingRight: display.MARGIN_SMALL
    },
    title: {
        marginTop: 30
    },
    emailTextBox: {
        marginTop: 30
    },
    passwordTextBox: {
        marginTop: 8
    },
    forgetPassword: {
        marginTop: 8
    },
    loginButton: {
        marginTop: 24
    },
    createAccount: {
        borderTopColor: colors.secondaryLighten6,
        borderTopWidth: 1,
        marginTop: display.MARGIN_LARGE,
        marginBottom: display.MARGIN_MEDIUM,
    },
    registerText: {
        marginTop: display.MARGIN_LARGE,
    },
    loginBtnContainer: {
        marginTop: display.MARGIN_MEDIUM
    },
});
