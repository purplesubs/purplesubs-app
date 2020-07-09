import {connect} from 'react-redux'
import * as ServiceActions from '../actions/ServiceActions'
import ServiceScreen from '../screens/ServiceScreen'
import * as RootNavigation from '../helpers/RootNavigation.js';

function mapStateToProps(state) {
    return {
        services: {
            1: {
                icon: 'netflix',
                name: 'Netflix',
                color: '#c51a16',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 7.99,
                order: 1
            },
            2: {
                icon: 'spotify',
                name: 'Spotify',
                color: '#61eb6e',
                hasService: false,
                fill: true,
                showPrice: true,
                amount: 0.99,
                order: 2
            },
            3: {
                icon: 'dribbble',
                name: 'Dribbble',
                color: '#ba4690',
                hasService: false,
                fill: true,
                showPrice: true,
                amount: 15.99,
                order: 3
            },
            4: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 4
            },
            5: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 5
            },
            6: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 6
            },
            7: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            8: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            9: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            10: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            11: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            12: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            },
            13: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: true,
                showPrice: true,
                amount: 14.95,
                order: 7
            }
        }
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onPressItem: (item) => () => {
            dispatch(ServiceActions.ON_PRESS_ITEM.action(item));
            RootNavigation.navigate('ServiceDetailsScreen');
        },
        onPressAddService:  () => {
            dispatch(ServiceActions.ON_PRESS_ADD_SERVICE.action());
            RootNavigation.navigate('NewServiceScreen');
        }
    }
}

function mergeProps(stateProps, dispatchProps) {

    let newServices = {}
    Object.keys(stateProps.services).map(i => {
        let item = stateProps.services[i];
        newServices[i] = {
            ...item,
            onPress: dispatchProps.onPressItem(item),
        }
    })

    return {
        ...stateProps,
        ...dispatchProps,
        services: newServices
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ServiceScreen)


