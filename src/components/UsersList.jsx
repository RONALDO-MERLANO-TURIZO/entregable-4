import React from 'react';

const UsersList = ({ usersList, usersSelect, deleteUsers }) => {



    return (
        <ul>
            {
                usersList.map((users) => 
                    <div className='card-users' key={users.id}>
                        <p className='card-users-items'>
                            <p><b>First Name: </b>{users.first_name}</p>
                            <p><b>Last Name: </b>{users.last_name}</p>
                            <p><b>Email: </b>{users.email}</p>
                            <p><b>Password: </b>{users.password}</p>
                            <p><b>Birthday: </b>{users.birthday}</p>
                        </p>
                        <div className='card-button'>
                            <button onClick={() => deleteUsers(users.id)} ><i class='bx bxs-trash-alt bx-sm'></i></button>
                            <button onClick={() => usersSelect(users)}><i class='bx bxs-pencil bx-sm'></i></button>
                        </div>
                    </div>
                )
            }
        </ul>
    );
};

export default UsersList;