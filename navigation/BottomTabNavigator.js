import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonHeader from '../components/header/ButtonHeader';
import SearchButtonHeader from '../components/header/SearchButtonHeader';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ServiceScreen from '../screens/ServiceScreen';
import UserScreen from '../screens/UserScreen';
import {colors, display, textStyles, icons} from '../constants/StyleSheet'
// import HeaderProfile from '../components/header/HeaderProfile'
import {BottomTabs} from '../constants/BottomTabs'
import {translations} from '../constants/translations'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Services';

export default function BottomTabNavigator({navigation, route}) {

    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html

    let language = "en"
    navigation.setOptions(getHeaderOptions(route, language));

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                             tabBarOptions={{
                                 activeTintColor: colors.primary,
                                 inactiveTintColor: colors.secondaryLighten3,
                                 labelStyle: textStyles.tabRegular,
                                 style: {},
                             }}>
            <BottomTab.Screen
                name={BottomTabs.Services}
                component={ServiceScreen}
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
                headerTitle: translations[language].bottomTabs.services.headerTitle,
                headerLeft: () => <SearchButtonHeader searchIcon={icons.SEARCH}
                                                      filterIcon={icons.FILTER}
                                                      size={25}
                                                      color={colors.secondaryLighten4}
                                                      style={{
                                                          paddingLeft: display.MARGIN_DEFAULT
                                                      }}/>,
                headerRight: () => <ButtonHeader icon={icons.ADD} size={35} color={colors.primary}
                                                 style={{
                                                     paddingRight: display.MARGIN_DEFAULT
                                                 }}/>
            };
            // container: {
        //         // paddingRight: display.MARGIN_DEFAULT,
        //         // paddingLeft: display.MARGIN_DEFAULT
        //     },
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
