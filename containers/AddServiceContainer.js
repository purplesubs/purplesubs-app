import {connect} from 'react-redux'
import * as ServiceActions from '../actions/ServiceActions'
import AddServiceScreen from '../screens/AddServiceScreen'
import * as RootNavigation from '../helpers/RootNavigation.js';

function mapStateToProps(state) {
    return {
        language: "en",
        currency: "€",
        popularServices: {
            1: {
                icon: 'netflix',
                text: 'Netflix',
                color: '#c51a16',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 7.99,
                order: 1
            },
            2: {
                icon: 'spotify',
                text: 'Spotify',
                color: '#61eb6e',
                hasService: false,
                fill: false,
                showPrice: false,
                amount: 0.99,
                order: 2
            },
            3: {
                icon: 'dribbble',
                text: 'Dribbble',
                color: '#ba4690',
                hasService: false,
                fill: false,
                showPrice: false,
                amount: 15.99,
                order: 3
            },
            4: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 4
            },
            5: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 5
            },
            6: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 6
            },
            7: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            8: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            9: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            10: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            11: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            12: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            },
            13: {
                icon: 'dropbox',
                text: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 7
            }
        }
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onPressItem: (item) => () => {
            // dispatch(ServiceActions.ON_PRESS_ITEM.action(item));
            // RootNavigation.navigate('ServiceDetails');
        }
    }
}

function mergeProps(stateProps, dispatchProps) {

    let newPopularServices = {}
    Object.keys(stateProps.popularServices).map(i => {
        let item = stateProps.popularServices[i];
        newPopularServices[i] = {
            ...item,
            onPress: dispatchProps.onPressItem(item),
        }
    })

    return {
        ...stateProps,
        ...dispatchProps,
        popularServices: Object.keys(stateProps.popularServices).map(i => {
            let item = stateProps.popularServices[i];
            return  {
                ...item,
                onPress: dispatchProps.onPressItem(item),
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddServiceScreen)


