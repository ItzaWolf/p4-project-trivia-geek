import React, { useEffect, useState } from "react";
import App from "../App";

function SignUp({ handleNewUser }) {
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [newUser, setNewUser] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: userName,
      password: password,
    };
    setNewUser(user)
  }

  useEffect(() => {
    if (newUser) {
      fetch("http://localhost:5555/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((newUser) => {
          handleNewUser(newUser);
          setConfirmationMessage("New User Added!");
          setIsSubmitted(true);
        });
    }
  }, [newUser])

  return (
    <div className="new-user-form">
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          password="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add New User</button>
      </form>
      {isSubmitted && <p> {confirmationMessage} </p>}
    </div>
  );
}
export default SignUp;
