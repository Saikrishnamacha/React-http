import React, { useState } from "react";
import UsersList from "./UsersList";
const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch(
      "https://users-73cce-default-rtdb.firebaseio.com/users.json"
    );
    const data = await res.json();
    // setData((prevData) => {
    //   return [...prevData, data];
    // });

    let transformedData = [];
    for (const key in data) {
      transformedData.push({
        id: key,
        name: data[key].name,
      });
    }
    setUsers(transformedData);
  };
  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>
      {users.map((item) => (
        <UsersList key={item.id} name={item.name} />
      ))}
    </div>
  );
};
export default Users;
