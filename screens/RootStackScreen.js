import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import LoginContainer from "../containers/LoginContainer";
import ModalDescriptionScreen from "./modals/ModalDescriptionScreen";
import ModalDescriptionContainer from "../containers/ModalDescriptionContainer";
import MainStackScreen from "./MainStackScreen";

export default function RootStackScreen() {

    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator
            initialRouteName="Root"
            mode="modal"
            screenOptions={({route, navigation}) => ({
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                headerStatusBarHeight:
                    navigation.dangerouslyGetState().routes.indexOf(route) > 0
                        ? 0
                        : undefined,
                ...TransitionPresets.ModalPresentationIOS,
            })}>
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{
                    headerShown: false,
                }}/>
            <RootStack.Screen name="LoginScreen" component={LoginContainer} options={{
                headerTitle: null
            }}/>
            <RootStack.Screen name="ModalDescriptionScreen" component={ModalDescriptionContainer}/>
        </RootStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {}
});
