import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import ServiceDetailsScreen from "./ServiceDetailsScreen";
import {MaterialIcons} from "@expo/vector-icons";
import {colors, icons} from "../constants/StyleSheet";
import NewServiceContainer from "../containers/NewServiceContainer";
import NewFormServiceContainer from "../containers/NewFormServiceContainer";
import UserDetailsScreen from "./UserDetailsScreen";

export default function MainStackScreen() {

    const MainStack = createStackNavigator();

    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Root" component={BottomTabNavigator}/>
            <MainStack.Screen
                name="ServiceDetailsScreen"
                component={ServiceDetailsScreen}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                    headerBackImage: () => <MaterialIcons
                        style={{marginLeft: 10}}
                        name={icons.BACK}
                        size={25}
                        color={colors.secondaryLighten0}
                    />,
                }}
            />
            <MainStack.Screen
                name="NewServiceScreen"
                component={NewServiceContainer}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                    headerStyle: [{
                        backgroundColor: colors.secondaryLighten7,
                        elevation: 0,
                        shadowOpacity: 0
                    }],
                    headerBackImage: () => <MaterialIcons
                        style={{marginLeft: 12}}
                        name={icons.BACK}
                        size={25}
                        color={colors.secondaryLighten0}
                    />
                }}
            />
            <MainStack.Screen
                name="NewFormServiceScreen"
                component={NewFormServiceContainer}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                    headerStyle: [{
                        backgroundColor: colors.secondaryLighten7,
                        elevation: 0,
                        shadowOpacity: 0
                    }],
                    headerBackImage: () => <MaterialIcons
                        style={{marginLeft: 12}}
                        name={icons.BACK}
                        size={25}
                        color={colors.secondaryLighten0}
                    />
                }}
            />
            <MainStack.Screen
                name="UserDetailsScreen"
                component={UserDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerBackImage: () => <MaterialIcons
                        style={{marginLeft: 10}}
                        name={icons.BACK}
                        size={25}
                        color={colors.secondaryLighten0}
                    />
                }}
            />
        </MainStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});
