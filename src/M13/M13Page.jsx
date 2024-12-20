import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function M13Page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/web/users");
      setUsers(response.data.dataUsers);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <h1>Data User</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <b>Name:</b> {user.name}
              <br />
              <b>Email:</b> {user.email}
              <br />
              <b>Address:</b> {user.address}
              <br />
              <b>Created:</b> {user.createdAt}
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default M13Page;
