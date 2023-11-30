// QuizListPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";

function QuizListPage({quizes}) {
  

  return (
    <div>
      <h1>Quiz List</h1>
      <ul>
        {quizes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>
              <QuizCard key={quiz.id} quiz={quiz} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizListPage;