import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuizPage from "./QuizPage";

const HomePage = ({ quizes, username }) => {
  console.log(quizes);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/quiz/science_quiz_data?username=${username}`}>
        Science Quiz
      </Link>
      {/* Add more links for other quizzes */}
    </div>
  );
};

export default HomePage;
