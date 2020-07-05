import * as React from 'react';
import {Image, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavButtonBack from './components/NavButtonBack'
import ServiceDetailsScreen from './screens/ServiceDetailsScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import {icons} from "./constants/StyleSheet";
import {colors, display, textStyles} from './constants/StyleSheet'
import LoginContainer from './containers/LoginContainer';
import {compose, createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/index.native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import userInitialState from './reducers/state';
import rootReducer from './reducers/rootReducer'
import rootEpic from './epics/rootEpic'

const persistConfig = {
    key: 'PURPLE_SUBS_REDUX_STATE',
    storage,
    // whitelist: ['countrySelector']
}

export const defaultState = {
    user: userInitialState,
}

const epicMiddleware = createEpicMiddleware(rootEpic);

const enhancer = compose(
    //composeEnhancers(applyMiddleware(epicMiddleware))
    applyMiddleware(epicMiddleware)
);

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer, defaultState, enhancer
);
let persistor = persistStore(store)

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
                    'Raleway_bold': require('./assets/fonts/Raleway_bold.ttf'),
                    'Lato': require('./assets/fonts/Lato.ttf'),
                    'Lato_bold': require('./assets/fonts/Lato_bold.ttf'),
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

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>

            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator
                        initialRouteName="Root"
                        screenOptions={{
                            headerShown: true,
                            headerTintColor: colors.secondaryLighten1,
                            headerStyle: [{
                                backgroundColor: '#fff',
                                elevation: 0,
                                shadowOpacity: 0
                            }]
                        }}>
                        <Stack.Screen name="LoginScreen" component={LoginContainer} options={{
                            headerTitle: null
                        }}/>
                        <Stack.Screen name="Root" component={BottomTabNavigator}/>
                        <Stack.Screen
                            name="ServiceDetails"
                            component={ServiceDetailsScreen}
                            options={{
                                headerBackTitleVisible: false,
                                headerBackImage: () => <Image style={{marginLeft: 10}} source={icons.BACK}/>,
                            }}
                        />
                        <Stack.Screen
                            name="UserDetails"
                            component={UserDetailsScreen}
                            options={{
                                headerBackTitleVisible: false,
                                headerBackImage: () => <Image style={{marginLeft: 10}} source={icons.BACK}/>,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>

                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
