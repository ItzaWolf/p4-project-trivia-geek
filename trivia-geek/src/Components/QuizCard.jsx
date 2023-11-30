import React, { useState } from "react";

function QuizCard({ quiz }) {
  const { quizcategory } = quiz;
  console.log(quiz);

  return (
    <div>
      <li id="quiz-card" alt={quiz.id}>{quizcategory}</li>
    </div>
  );
}

export default QuizCard;
