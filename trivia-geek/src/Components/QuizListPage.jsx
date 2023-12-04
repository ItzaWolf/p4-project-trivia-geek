// QuizListPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";
import NewQuizForm from "./NewQuizForm";

function QuizListPage({quizes, setQuizes}) {
        const [showNewQuizForm, setShowNewQuizForm] = useState(false);
        
        const handleNewQuizClick = () => {
          setShowNewQuizForm(true);
        };

        const handleNewQuizSubmit = (newQuizData) => {
            // Handle the submitted data (e.g., update state or send to the server)
            console.log("New quiz data:", newQuizData);
        
            // Reset the form and hide it
            setShowNewQuizForm(true);
          };
  

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
      <button onClick={handleNewQuizClick}>Add New Quiz</button>

      {showNewQuizForm && <NewQuizForm onSubmit={handleNewQuizSubmit} setQuizes={setQuizes} />} 
    </div>
  );
}

export default QuizListPage;