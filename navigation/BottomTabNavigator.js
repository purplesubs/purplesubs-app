import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ServiceContainer from '../containers/ServiceContainer';
import UserScreen from '../screens/UserScreen';
import {colors, display, textStyles, icons} from '../constants/StyleSheet'
import {BottomTabs} from '../constants/BottomTabs'
import {translations} from '../constants/translations'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Services';

export default function BottomTabNavigator({navigation, route}) {

    let language = "en"
    navigation.setOptions(getHeaderOptions(route, language));

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                             tabBarOptions={{
                                 showLabel: false,
                                 activeTintColor: colors.primary,
                                 inactiveTintColor: colors.secondaryLighten3,
                                 labelStyle: textStyles.tabRegular,
                                 style: {},
                             }}>
            <BottomTab.Screen
                name={BottomTabs.Services}
                component={ServiceContainer}
                options={{
                    title: translations[language].bottomTabs.services.tabTitle,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-cloud"/>,
                }}
            />
            <BottomTab.Screen
                name={BottomTabs.Users}
                component={UserScreen}
                options={{
                    title: translations[language].bottomTabs.users.tabTitle,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-people"/>,
                }}
            />
            <BottomTab.Screen
                name={BottomTabs.Dashboard}
                component={DashboardScreen}
                options={{
                    title: translations[language].bottomTabs.dashboard.tabTitle,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-podium"/>,
                }}
            />
            <BottomTab.Screen
                name={BottomTabs.Events}
                component={LinksScreen}
                options={{
                    title: translations[language].bottomTabs.events.tabTitle,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-calendar"/>,
                }}
            />
            <BottomTab.Screen
                name={BottomTabs.Account}
                component={LinksScreen}
                options={{
                    title: translations[language].bottomTabs.account.tabTitle,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-person"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderOptions(route, language) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {

        case BottomTabs.Services:
            return {
                headerTitle: null,//translations[language].bottomTabs.services.headerTitle,
                headerLeft: null,
                headerRight: null,
                headerStyle: [{
                    backgroundColor: colors.secondaryLighten7,
                    elevation: 0,
                    shadowOpacity: 0
                }]
            };
        case BottomTabs.Users:
            return {
                headerTitle: translations[language].bottomTabs.users.headerTitle,
                headerRight: null
            };
        case BottomTabs.Dashboard:
            return {
                headerTitle: translations[language].bottomTabs.dashboard.headerTitle,
                headerRight: null
            };
        case BottomTabs.Events:
            return {
                headerTitle: translations[language].bottomTabs.events.headerTitle,
                headerRight: null
            };
        case BottomTabs.Account:
            return {
                headerTitle: translations[language].bottomTabs.account.headerTitle,
                headerRight: null
            };
        default:
            return '';
    }
}
