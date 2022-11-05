import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    // const name = form.name.value;
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user added successfully");
          form.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h4>Please add new user</h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputBlur}
          type="text"
          name="name"
          id=""
          placeholder="Name"
          required
        />
        <br />
        <input
          onChange={handleInputBlur}
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
        />
        <br />
        <input
          onChange={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
