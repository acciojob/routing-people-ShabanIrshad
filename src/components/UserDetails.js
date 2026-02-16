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
            {loading?<h1>Loading...</h1>:
                <div>
                     <h1>User Details </h1>
                     <p><b>Name:</b>{user.name}</p>
                     <p><b>UserName:</b>{user.username}</p>
                     <p><b>Email:</b>{user.email}</p>
                     <p><b>Phone:</b>{user.phone}</p>
                     <p><b>Website:</b>{user.website}</p>
                </div>
            }
           
        </>
    );
}
export default UserDetails;