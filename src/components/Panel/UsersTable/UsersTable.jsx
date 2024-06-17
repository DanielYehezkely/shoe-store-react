import React from "react";

import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Loader from "../../Loader/Loader";
import { useFetchUsers } from "../../../context/FetchUsersContext";

import './UsersTable.css'

const UsersTable = ({ users }) => {

  const { deleteUsersError, isDeleting, deleteUserCall } = useFetchUsers();

  if (users.length === 0) {
    return <div className="no-users-message">You got no users calls ... </div>;
  }

  return <>
    {isDeleting && <Loader/>}
    {deleteUsersError && <ErrorMessage error={deleteUsersError}/>}
    <table >
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Message</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="name">{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.message}</td>
            <td><button className="panel-approached-button" onClick={() => deleteUserCall(user.id)}>Approached</button></td>
          </tr>
        ))}
      </tbody>
    </table>;
  </>

};

export default UsersTable;
