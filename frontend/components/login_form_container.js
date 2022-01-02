import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../actions/session_actions";

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'login',
    formTitle: 'Log In'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);