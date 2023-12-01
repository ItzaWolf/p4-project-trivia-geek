import React, { useEffect, useState } from "react";
import App from "../App";


function SignUp({ handleNewUser }) {
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [newUser, setNewUser] = useState(null)
  const [player, setPlayers] = useState([])
  const [editingUserId, setEditingUserId] = useState(null)

  useEffect(() => {
    fetch("http://localhost:5555/user") 
    .then((res) => res.json())
    .then((p)=> {
      setPlayers(p)
    })
  },[])

  console.log(player)

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: userName,
      password: password,
    }
    fetch("http://localhost:5555/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((newUser) => {
          setPlayers((prevPlayers) => [...prevPlayers, newUser]);
          setUserName("")
          setPassword("")
          // handleNewUser(newUser);
          // setConfirmationMessage("New User Added!");
          // setIsSubmitted(true);
        });
    // setNewUser(user)
  }
  function handleDelete(user) {
    console.log(user)
    fetch(`http://localhost:5555/user/${user.id}`,{
      method: "DELETE"
    }) .then((res) => res.json())
    .then(() => {
      // After successful deletion, update the state to reflect the changes
      setPlayers((prevPlayers) => prevPlayers.filter((u) => u.id !== user.id));
    })
  }

  function handleEdit(user) {
    setEditingUserId(user.id);
  }
  function handleSave(user) {
    // Make a PATCH or PUT request to update the username on the server
    // and then update the state with the updated user data
    // Example using fetch:
    fetch(`http://localhost:5555/user/${user.id}`, {
      method: "PATCH", // or "PUT" depending on your API
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username }), // Update with new username
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setPlayers((prevPlayers) =>
          prevPlayers.map((u) =>
            u.id === updatedUser.id ? updatedUser : u
          )
        );
        setEditingUserId(null);
      });
  }

  // useEffect(() => {
  //   if (newUser) {
  //     fetch("http://localhost:5555/user", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newUser),
  //     })
  //       .then((res) => res.json())
  //       .then((newUser) => {
  //         handleNewUser(newUser);
  //         setConfirmationMessage("New User Added!");
  //         setIsSubmitted(true);
  //       });
  //   }
  // }, [newUser])

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
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add New User</button>
      </form>
      <div className="user-list">
        {player.map((user) => (
          <div key={user.id}>
            {editingUserId === user.id ? (
              <>
                <input
                  type="text"
                  value={user.username}
                  onChange={(e) =>
                    setPlayers((prevPlayers) =>
                      prevPlayers.map((u) =>
                        u.id === user.id
                          ? { ...u, username: e.target.value }
                          : u
                      )
                    )
                  }
                />
                <button onClick={() => handleSave(user)}>Save</button>
              </>
            ) : (
              <>
                <p>{user.username}</p>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
      {isSubmitted && <p> {confirmationMessage} </p>}
    </div>
  );
}
export default SignUp;
