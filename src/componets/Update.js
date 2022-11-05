import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const update = () => {
  const storedUser = useLoaderData();
  const [user,setUser] = useState(storedUser);

  const handleSubmit = event => {
    event.preventDefault()
    // const form = event.target;
    // const email = form.email.value;
    // const name = form.name.value;
    // console.log(user);
    fetch(`http://localhost:5000/user/${storedUser._id}`, {
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
        alert("user updated")
      }
    })

  }
  
  const handleInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;

    const newUser = {...user};
    newUser[field] = value ;
    setUser(newUser)
  }

  return (
    <div>
       <h3>Update : {user.name}</h3>
      <form onSubmit={handleSubmit} >
        <input onChange={handleInputChange} type="text" defaultValue={storedUser.name} name="name" id="" placeholder='Name' required/>
        <br />
        <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name="address" id="" placeholder='Address' required/>
        <br />
        <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name="email" id="" placeholder='Email' required/>
        <br />
       <button type="submit">Update User</button>
      </form>
      
    </div>
  );
};

export default update;

