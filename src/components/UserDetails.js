import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);   // IMPORTANT: reset state immediately

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => console.log(err));

  }, [id]);

  if (!user) {
    return <div>Loading...</div>;   // Cypress expects this
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
