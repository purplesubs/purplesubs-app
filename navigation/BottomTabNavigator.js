import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ServiceScreen from '../screens/ServiceScreen';
import UserScreen from '../screens/UserScreen';
import {colors, display, textStyles} from '../constants/StyleSheet'
import HeaderProfile from '../components/HeaderProfile'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Services';

export default function BottomTabNavigator({navigation, route}) {
    console.info(".........>>>", navigation )

    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({headerTitle: getHeaderTitle(route)});

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                             tabBarOptions={{
                                 activeTintColor: colors.primary,
                                 inactiveTintColor: colors.secondarylighten3,
                                 labelStyle: textStyles.tabRegular,
                                 style: {},
                             }}>
            <BottomTab.Screen
                name="Services"
                component={ServiceScreen}
                options={{
                    title: 'SERVICES',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-cloud-outline"/>,
                }}
            />
            <BottomTab.Screen
                name="Users"
                component={UserScreen}
                options={{
                    title: 'USERS',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-contacts"/>,
                }}
            />
            <BottomTab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: 'STATS',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-stats"/>,
                }}
            />
            <BottomTab.Screen
                name="Events"
                component={LinksScreen}
                options={{
                    title: 'EVENTS',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-list"/>,
                }}

            />
            <BottomTab.Screen
                name="Account"
                component={LinksScreen}
                options={{
                    title: 'ACCOUNT',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-contact"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {

        case 'Dashboard':
            return 'Dashboard';

        case 'Services':
            return 'Services';

        case 'Users':
            return 'Users';
        default:
            return '';
    }
}
