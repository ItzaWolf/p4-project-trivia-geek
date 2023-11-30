// QuizListPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";

function QuizListPage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch the list of quizzes from the server
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("/quiz");
        if (response.ok) {
          const data = await response.json();
          setQuizzes(data);
        } else {
          console.error("Error fetching quiz list:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching quiz list:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>Quiz List</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>
              <QuizCard quiz={quiz} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizListPage;