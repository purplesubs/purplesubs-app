import * as React from 'react';
import {Image, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderProfile from './components/HeaderProfile'
import NavButtonBack from './components/NavButtonBack'
import ServiceDetailsScreen from './screens/ServiceDetailsScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import {icon} from "./constants/StyleSheet";

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    'Raleway': require('./assets/fonts/Raleway.ttf'),
                    'Lato': require('./assets/fonts/Lato.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: true,
                            // headerTitle: "",
                            // headerRight: () => (
                            //     <HeaderProfile/>
                            // ),
                            headerStyle: {
                                backgroundColor: '#fff',
                                elevation: 0,
                                shadowOpacity: 0
                            }
                        }}>
                        <Stack.Screen name="Root" component={BottomTabNavigator}/>
                        <Stack.Screen
                            name="ServiceDetails"
                            component={ServiceDetailsScreen}
                            options={{
                                headerBackTitleVisible: false,
                                headerBackImage: () => <Image style={{marginLeft: 10}} source={icon.BACK}/>,
                            }}
                        />
                        <Stack.Screen
                            name="UserDetails"
                            component={UserDetailsScreen}
                            options={{
                                headerBackTitleVisible: false,
                                headerBackImage: () => <Image style={{marginLeft: 10}} source={icon.BACK}/>,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
