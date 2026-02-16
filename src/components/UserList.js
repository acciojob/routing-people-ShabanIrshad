import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList=()=>{
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setLoading(true);
         fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => res.json())
      .then(data =>{ 
        setUser(data);
        setLoading(false);
      }
    )
      .catch(err => console.log(err));
    },[]);
    console.log(user);
    return (
        <>
            {loading?<div>Loading...</div>:
                <div>
                     <h1>User List</h1>
            <ul>
                {user.map((user,index)=><li key={index}><Link to={`user/${user.id}`}>{user.name}</Link></li>)}
            </ul>
                </div>
            }
           

        </>
    );
}
export default UserList;