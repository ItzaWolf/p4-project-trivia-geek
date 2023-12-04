import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizCard from "./QuizCard";

function QuizPage() {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const[quiz, setQuiz] = useState({
    questions: []
  });
  // const [q, setQuestions] = useState([]);
  console.log(quiz)
const ques = (quiz.questions.map((question)=>{
  return <QuizCard question={question}/>
} ))

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const correct = selectedOption === quiz?.answer;
    setIsCorrect(correct);
  };

  useEffect(() => {
    fetch(`http://localhost:5555/quiz/${id}`)
      .then((res) => res.json())
      .then((quizData) => {
        console.log(quizData)
        setQuiz(quizData);
      });
  }, [id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
      
        <ul className="options-list">
          {/* {quiz.question.map((key) => (
            <li key={key}>
              <label className="option-label">
                <input
                  type="radio"
                  name="quiz-option"
                  value={key}
                  checked={selectedOption === key}
                  onChange={() => handleOptionChange(key)}
                />
                {quiz.options[key]}
              </label>
            </li>
          ))} */}
          {ques}
        </ul>


        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>

        {isCorrect !== null && (
          <div className={isCorrect ? "correct-answer" : "incorrect-answer"}>
            {isCorrect ? "Correct!" : "Incorrect. Try again!"}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;