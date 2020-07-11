import {connect} from 'react-redux'
import DatePickerModal from '../screens/modals/DatePickerModal'
import * as RootNavigation from "../helpers/RootNavigation";

function mapStateToProps(state) {
    return {
        description: "en"
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onPressClose: () => {
            RootNavigation.goBack();
        },
        onPressDone: (date) => {
            console.log('---> NewFormServiceContainer.onPressDone', date)
            RootNavigation.goBack();
        }
    }
}

function mergeProps(stateProps, dispatchProps) {

    return {
        ...stateProps,
        ...dispatchProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DatePickerModal)


