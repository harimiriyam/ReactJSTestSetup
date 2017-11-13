import { connect } from 'react-redux';
import { UserDataForm } from './component-user-form';

export default connect(
    null,
    dispatch => {
        return { dispatch }
    })(UserDataForm);