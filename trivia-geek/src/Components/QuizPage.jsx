import React, { useState } from "react";

function QuizPage({ quiz }) {
  const { question, options, answer } = quiz;

  const [selectedOption, setSelectedOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const handleSubmit = () => {
    const correct = selectedOption === answer;
    setIsCorrect(correct)
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2 className="question">{question}</h2>
        
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index}>
              <label className="option-label">
                <input
                  type="radio"
                  name="quiz-option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizPage;