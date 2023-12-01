import React, { useState } from "react";

const NewQuizForm = ({ onSubmit, setQuizzes }) => {
  const [quizCategory, setQuizCategory] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: { A: "", B: "", C: "", D: "" }, answer: "" },
  ]);

  const handleQuestionChange = (index, field, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        [field]: value,
      };
      return updatedQuestions;
    });
  };

  const handleOptionChange = (index, option, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options = {
        ...updatedQuestions[index].options,
        [option]: value,
      };
      return updatedQuestions;
    });
  };

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { question: "", options: { A: "", B: "", C: "", D: "" }, answer: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuizData = { quizcategory: quizCategory, questions: questions };
    try {
      const response = await fetch("http://localhost:5555/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuizData),
      });

      if (response.ok) {
        console.log("Quiz successfully added!");
        setQuizCategory("");
        setQuestions([
          { question: "", options: { A: "", B: "", C: "", D: "" }, answer: "" },
        ]);
        response.json().then((data) => setQuizzes((prev) => [...prev, data]));
      } else {
        console.error(
          "Failed to add quiz:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    onSubmit(newQuizData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Category:
        <input
          type="text"
          value={quizCategory}
          onChange={(e) => setQuizCategory(e.target.value)}
        />
      </label>

      {questions.map((question, index) => (
        <div key={index}>
          <label>
            Question {index + 1}:
            <input
              type="text"
              value={question.question}
              onChange={(e) =>
                handleQuestionChange(index, "question", e.target.value)
              }
            />
          </label>

          <br />

          {Object.keys(question.options).map((key) => (
            <label key={key}>
              Option {key}:
              <input
                type="text"
                value={question.options[key]}
                onChange={(e) => handleOptionChange(index, key, e.target.value)}
              />
            </label>
          ))}

          <br />

          <label>
            Correct Answer:
            <input
              type="text"
              value={question.answer}
              onChange={(e) =>
                handleQuestionChange(index, "answer", e.target.value)
              }
            />
          </label>

          <hr />
        </div>
      ))}

      <button type="button" onClick={addQuestion}>
        Add Question
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewQuizForm;
