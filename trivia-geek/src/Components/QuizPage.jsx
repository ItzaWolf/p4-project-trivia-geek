import React, { useState } from "react";

function QuizPage({ quiz }) {
  const { question, options, answer } = quiz;

  return (
    <div class="h-50 w-80">
      <li
        id="quiz-card"
        className="border-black border-solid border-4 mx-3 my-30 bg-gray-300"
      >
        <span class="inline-flex items-baseline">
        
        </span>
    
      </li>
    </div>
  );
}

export default QuizPage;