import {connect} from 'react-redux'
import NewFormServiceScreen from '../screens/NewFormServiceScreen'
import * as RootNavigation from "../helpers/RootNavigation";

function mapStateToProps(state) {
    return {
        language: "en",
        currency: "€",
        serviceSelected: {
            icon: 'netflix',
            name: 'Netflix',
            color: '#c51a16',
            hasService: true,
            fill: false,
            showPrice: false,
            amount: 7.99,
            order: 1
        }
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onPressEditDescription: () => {
            RootNavigation.navigate('ModalDescriptionScreen');
        },
        onChangeName: (text) => {
            console.log('---> NewFormServiceContainer.onChangeName', text)
        },
        onChangePrice: (text) => {
            console.log('---> NewFormServiceContainer.onChangePrice', text)
        },
        onPressFirstBill: () => {
            console.log('---> NewFormServiceContainer.onPressFirstBill')
            RootNavigation.navigate('DatePickerModal');
        },
        onPressCycle: () => {
            console.log('---> NewFormServiceContainer.onPressCycleSelect')
            RootNavigation.navigate('CyclePickerModal');
        }
    }
}

function mergeProps(stateProps, dispatchProps) {

    return {
        ...stateProps,
        ...dispatchProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewFormServiceScreen)


