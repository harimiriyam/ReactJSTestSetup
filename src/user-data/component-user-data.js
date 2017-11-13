import React from 'react';

export const UserDataTable = ({ userData, removeUser }) => {
    if(userData.length > 0) {
        return(<div className="table-container">
        <div className="table-row header">
            <div className="user-name">User Name</div>
            <div className="contact">Contact</div>
            <div className="action">Action</div>
        </div>
        {userData.map((user, i) => <div className="table-row body" key={i}>
            <div className="user-name">{user.name}</div><div className="contact">{user.contact}</div><div><button className="removeAction" onClick={() => removeUser(user)}>Remove</button></div></div>)}
     </div>)
    } else {
        return null;
    }
}