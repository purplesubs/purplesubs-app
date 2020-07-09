import {connect} from 'react-redux'
import NewFormServiceScreen from '../screens/NewFormServiceScreen'

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

    }
}

function mergeProps(stateProps, dispatchProps) {

    return {
        ...stateProps,
        ...dispatchProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewFormServiceScreen)


