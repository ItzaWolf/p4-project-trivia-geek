import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizCard from "./QuizCard";

function QuizPage() {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(selectedOption);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quiz, setQuiz] = useState({
    questions: [],
  });
  // const [q, setQuestions] = useState([]);
  const [newQuiz, setNewQuiz] = useState({
    question: "",
    options: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    answer: "",
  });

  const ques = quiz.questions.map((question) => {
    return <QuizCard question={question} key={question.id} />;
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const correct = selectedOption === quiz?.answer;
    setIsCorrect(correct);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5555/quizzes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuiz),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New quiz added:", data);
      })
      .catch((error) => {
        console.error("Error adding new quiz:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5555/quiz/${id}`)
      .then((res) => res.json())
      .then((quizData) => {
        console.log(quizData);
        setQuiz(quizData);
      });
  }, [id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <form onSubmit={handleFormSubmit}>
          <label>
            Quiz ID:
            <input
              type="text"
              value={newQuiz.id}
              onChange={(e) => setNewQuiz({ ...newQuiz, id: e.target.value })}
            />
          </label>
          <label>
            {" "}
            Question:
            <input
              type="text"
              value={newQuiz.question}
              onChange={(e) =>
                setNewQuiz({ ...newQuiz, question: e.target.value })
              }
            />
          </label>
          <label>
            {" "}
            Options:
            {Object.keys(newQuiz.options).map((key) => (
              <div key={key}>
                {key}:
                <input
                  type="text"
                  value={newQuiz.options[key]}
                  onChange={(e) =>
                    setNewQuiz({
                      ...newQuiz,
                      options: { ...newQuiz.options, [key]: e.target.value },
                    })
                  }
                />
              </div>
            ))}
          </label>
          <label>
            {" "}
            Answer:
            <input
              type="text"
              value={newQuiz.answer}
              onChange={(e) =>
                setNewQuiz({ ...newQuiz, answer: e.target.value })
              }
            />
          </label>
          <button type="submit">Add Quiz</button>
        </form>

        <ul className="options-list">{ques}</ul>

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
