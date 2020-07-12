import {connect} from 'react-redux'
import CyclePickerModal from '../screens/modals/CyclePickerModal'
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
            console.log('---> CyclePickerModalContainer.onPressDone', date)
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CyclePickerModal)


