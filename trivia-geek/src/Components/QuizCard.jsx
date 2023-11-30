import React, {useState} from "react";

function QuizCard({quiz}) {
    const {quiz, question, options, answer} = quiz;

    return (
        <div>
            <li id="quiz-card" alt={quiz.id}>     
            </li>
        </div>
    )
}

export default QuizCard;