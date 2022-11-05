import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const  users = useLoaderData();
  const [displayUsers,setDisplayUsers] = useState(users)

  const hanldeDelete = user => {
    const agree = window.confirm(`Are You Sure You want to delete ${user.name}`);
    
    
    if(agree){
     fetch(`http://localhost:5000/user/${user._id}`, {
      method : 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      if(data.deletedCount > 0) {
        alert('user deleted successfully');
        const remaingUsers = displayUsers.filter(usr => usr._id !== user._id);
        setDisplayUsers(remaingUsers);
      }
     })
    }
  }

  return (
    <div>
      <h2>Users : {displayUsers.length}</h2>
      {
        displayUsers.map(user => <p key={user._id}
        >{user.name} {user.email}
        <Link to={`/update/${user._id}`}><button>Update</button></Link>
         <button onClick={() => hanldeDelete(user)}>X</button>
        </p>)
      }
    </div>
  );
};

export default Home;