import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <ul style={{ margin: "20px auto", display: "block" }}>
                {this.props.users
                    ? this.props.users.map(user => <li key={user.id}>User Name: {user.name} Phone Number:{user.phoneNumber} Address:{user.address}</li>)
                    : <p>Please enter a username.</p>}
            </ul>
        )
    }
}
