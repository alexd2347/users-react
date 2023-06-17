import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UserList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== userId);
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
    </React.Fragment>
  );
}

export default App;
