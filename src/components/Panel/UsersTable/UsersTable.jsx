import React from "react";

import './UsersTable.css'

const UsersTable = ({users}) => {

  return <>
  
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
            <td><button className="btn panel-edit-button">Approached</button></td>
          </tr>
        ))}
      </tbody>
    </table>;
  </>

};

export default UsersTable;
