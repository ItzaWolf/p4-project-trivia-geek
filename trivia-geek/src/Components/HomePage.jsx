import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');

  const handleNewUser = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <Link to={`/quiz/science_quiz_data?username=${username}`}>Science Quiz</Link>
      <Link to={`/quiz/tech_quiz_data?username=${username}`}>Tech Quiz</Link>
      <Link to={`/quiz/animals_quiz_data?username=${username}`}>Animals Quiz</Link>
      <Link to={`/quiz/entertainment_quiz_data?username=${username}`}>Entertainment Quiz</Link>
      {/* Add more links for other quizzes */}
    </div>
  );
};

export default Home;
