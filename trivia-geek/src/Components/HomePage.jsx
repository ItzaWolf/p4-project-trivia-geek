import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuizPage from "./QuizPage";

const HomePage = ({ quizes, username }) => {
  console.log(quizes);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Add more links for other quizzes */}
    </div>
  );
};

export default HomePage;
