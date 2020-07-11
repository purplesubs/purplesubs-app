import {connect} from 'react-redux'
import AddServiceScreen from '../screens/NewServiceScreen'
import * as RootNavigation from '../helpers/RootNavigation.js';

function mapStateToProps(state) {
    return {
        language: "en",
        currency: "€",
        popularServices: {
            1: {
                icon: 'netflix',
                name: 'Netflix',
                color: '#c51a16',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 7.99,
                order: 1
            },
            2: {
                icon: 'spotify',
                name: 'Spotify',
                color: '#61eb6e',
                hasService: false,
                fill: false,
                showPrice: false,
                amount: 0.99,
                order: 2
            },
            3: {
                icon: 'dribbble',
                name: 'Dribbble',
                color: '#ba4690',
                hasService: false,
                fill: false,
                showPrice: false,
                amount: 15.99,
                order: 3
            },
            4: {
                icon: 'dropbox',
                name: 'Dropbox',
                color: '#3295e6',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 4
            },
            5: {
                icon: 'logo-playstation',
                name: 'Playstation',
                color: '#12308f',
                hasService: true,
                fill: false,
                showPrice: false,
                amount: 14.95,
                order: 5
            },
        }
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onPressItem: (item) => () => {
            RootNavigation.navigate('NewFormServiceScreen');
        }
    }
}

function mergeProps(stateProps, dispatchProps) {

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


