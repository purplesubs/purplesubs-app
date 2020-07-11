import {connect} from 'react-redux'
import ModalDescriptionScreen from '../screens/modals/ModalDescriptionScreen'
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
        onPressDone: () => {
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ModalDescriptionScreen)


