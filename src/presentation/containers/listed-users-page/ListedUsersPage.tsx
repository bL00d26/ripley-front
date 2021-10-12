import React, { useEffect, useState } from "react";
import { loadUsers } from "../../../infraestructure/api/user.actions";
import { User } from "../../../infraestructure/interfaces/user.interface";

export const ListedUsersPage = () => {
  const [users, setUsers] = useState([] as User[]);
  const getAllUsers = async () => {
    const users: User[] = await loadUsers();
    if (users.length < 0) setUsers([]);
    setUsers(users);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};
