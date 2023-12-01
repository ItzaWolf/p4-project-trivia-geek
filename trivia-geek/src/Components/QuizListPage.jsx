// QuizListPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";

function QuizListPage({quizes}) {
  console.log(quizes)
  

  return (
    <div>
      <h1>Quiz List</h1>
      <ul>
        {quizes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>
             <h2>{quiz.quizcategory}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizListPage;