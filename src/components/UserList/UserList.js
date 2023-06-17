import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';

const UsersList = (props) => {
    const deleteUserHandler = (userId) => {
        props.onDeleteUser(userId);
    };

    return (
        <Card className={classes.users}>
            {props.users.length === 0 && <h2>No users yet...</h2>}
            <ul>
                {props.users.map((user) => (
                    <li key={user.id} onClick={deleteUserHandler.bind(null, user.id)}>
                        {user.name} {user.age} years old
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
