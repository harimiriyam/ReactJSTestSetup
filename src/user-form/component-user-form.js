import React from 'react'
import { PropTypes } from 'prop-types'


export const UserDataForm = ({ name, contact, dispatch }) => {
	
	let _name, _contact;

	return (
			<div className='form-container'>			
			<form onSubmit={() => { 
				dispatch({
					type: 'ADD_USER', 
					name: _name.value,
					contact: _contact.value
				})
                _name.value = "";
                _contact.value = "";
                }} className='input-form'>
			<div>
				<label>User Name :</label>
				<input type='text' id='userName' ref={(input) => { _name = input; }}/>
			</div>
			<div>
			<label>Contact :</label>
			<input type='text' id='contact' ref={(input) => { _contact = input; }} />
			</div>
			<button className="formSubmit">Submit</button>
			</form></div>
			
		)
}

UserDataForm.propTypes = {
	name: PropTypes.string,
	contact: PropTypes.number
}