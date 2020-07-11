import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
    createStackNavigator,
    TransitionSpecs,
    TransitionPresets,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import LoginContainer from "../containers/LoginContainer";
import DatePickerModalContainer from "../containers/DatePickerModalContainer";
import ModalDescriptionContainer from "../containers/ModalDescriptionContainer";
import MainStackScreen from "./MainStackScreen";

export default function RootStackScreen() {

    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator
            initialRouteName="Root"
            mode="card"
            screenOptions={({route, navigation}) => ({
                headerShown: false,

                //1
                gestureEnabled: true,
                cardOverlayEnabled: true,
                headerStatusBarHeight:
                    navigation.dangerouslyGetState().routes.indexOf(route) > 0
                        ? 0
                        : undefined,
                ...TransitionPresets.ModalPresentationIOS,

                //2
                // gestureEnabled: true,
                // cardStyle: {
                //     // backgroundColor: 'transparent',
                // },
                // cardOverlayEnabled: true,
                // cardStyleInterpolator: ({current: {progress}}) => ({
                //     cardStyle: {
                //         opacity: progress.interpolate({
                //             inputRange: [0, 0.5, 0.9, 1],
                //             outputRange: [0, 0.25, 0.7, 1],
                //         }),
                //     },
                //     overlayStyle: {
                //         opacity: progress.interpolate({
                //             inputRange: [0, 1],
                //             outputRange: [0, 0.5],
                //             extrapolate: 'clamp',
                //         }),
                //     },
                // }),

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
            <RootStack.Screen name="ModalDescriptionScreen"
                              component={ModalDescriptionContainer}
                             />
            <RootStack.Screen name="DatePickerModal"
                              component={DatePickerModalContainer}
                              options={{
                                  cardStyle: {
                                      backgroundColor: "transparent",
                                  },
                                  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

                                  // transitionSpec: {
                                  //     open: config,
                                  //     close: config,
                                  // },

                                  // transitionSpec: {
                                  //     open: TransitionSpecs.TransitionIOSSpec,
                                  //     close: TransitionSpecs.TransitionIOSSpec,
                                  // }

                                  // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,

                                  // ...TransitionPresets.ModalSlideFromBottomIOS,
                              }}/>
        </RootStack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {}
});
