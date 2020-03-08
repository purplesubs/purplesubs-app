import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DashboardScreen from '../screens/DashboardScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Dashboard';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Services"
                component={HomeScreen}
                options={{
                    title: 'Services',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
                }}
            />
            <BottomTab.Screen
                name="Users"
                component={LinksScreen}
                options={{
                    title: 'Users',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <BottomTab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <BottomTab.Screen
                name="Events"
                component={LinksScreen}
                options={{
                    title: 'Events',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={LinksScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Services':
      return 'Services';
    case 'Users':
      return 'Users';
    case 'Dashboard':
      return 'Dashboard';
    case 'Events':
      return 'Events';
    case 'Settings':
      return 'Settings';
  }
}
