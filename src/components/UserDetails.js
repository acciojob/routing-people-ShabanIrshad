import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails=()=>{
    const {id}=useParams();
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);
    console.log(id);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json()).then(data=>{
            setUser(data);
            setLoading(false);
        }).catch(err=>console.log(err));
    },[])
    console.log(user);
    return (
        <>  
            {loading?<div>Loading...</div>:
                <div>
                     <h1>User Details </h1>
                     <p>Name:{user.name}</p>
                     <p>UserName:{user.username}</p>
                     <p>Email:{user.email}</p>
                     <p>Phone:{user.phone}</p>
                     <p>Website:{user.website}</p>
                </div>
            }
           
        </>
    );
}
export default UserDetails;