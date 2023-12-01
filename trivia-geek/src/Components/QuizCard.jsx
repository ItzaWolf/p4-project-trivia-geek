import React, { useState } from "react";

function QuizCard({ question}) {
    console.log(question)
  

  return (
    <div>
       <li>
              <label className="option-label"> 
                {question.question}
              </label>
              
            </li>
             
            <button> {question.options.A}</button> 
            <button> {question.options.B}</button>
            <button> {question.options.C}</button>
            <button> {question.options.D}</button>

                
               
    </div>
  );
}

export default QuizCard;
