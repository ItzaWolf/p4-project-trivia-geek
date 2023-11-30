import React, { useEffect, useState } from "react";

function SignUp({ handleNewUser }) {
  cost[(userName, setUserName)] = useState("");
  cost[(password, stePassword)] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      name: userName,
      password: password,
    };
  }

  useEffect(() => {
    fetch("http://localhost:5555/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        handleNewUser(newUser);
        setConfirmationMessage("New User Added!");
      });
  });

  return (
    <div className="new-user-form">
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={(e) => userName(e.target.value)}
        />
        <input
          type="text"
          password="password"
          placeholder="Password"
          value={password}
          onChange={(e) => password(e.target.value)}
        />
        <button type="submit">Add New User</button>
      </form>
      {isSubmitted && <p> {confirmationMessage} </p>}
    </div>
  );
}
export default SignUp;
