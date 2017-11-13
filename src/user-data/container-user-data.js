import { connect } from 'react-redux';
import { UserDataTable } from './component-user-data';

export const mapStateToProps = (state) => ({
	userData: state
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: (data) => {
    dispatch({type : 'REMOVE_USER', payload : data.name});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDataTable);