import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function QuizPage() {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [q, setQuestions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const correct = selectedOption === answer;
    setIsCorrect(correct);
  };

  useEffect(() => {
    fetch(`http://localhost:5555/quiz/${id}`)
      .then((res) => res.json())
      .then((question) => {
        setQuestions(question);
      });
  }, []);
  console.log(q);

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {q.questions?.map((data) => {
          return <h2 key={q.id}>{data.question}</h2>;
          // console.log(data);
        })}

        {/* <ul className="options-list">
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
        </ul> */}

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
