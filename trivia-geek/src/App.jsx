import "./App.css";
import { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  UNSAFE_DataRouterStateContext,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import RootLayout from "./Layouts/RootLayout";
import SignUp from "./Components/SignUp";
import QuizListPage from "./Components/QuizListPage";
import QuizCard from "./Components/QuizCard";
import QuizPage from "./Components/QuizPage";

function App() {
  const [quizes, setQuizes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5555/quiz")
      .then((res) => res.json())
      .then((quizesArray) => {
        setQuizes(quizesArray);
      });
  }, []);

  function handleNewUser(newUser) {
    const updatedUser = [...user, newUser];
    setUser(updatedUser);
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage quizes={quizes} />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizListPage quizes={quizes}/>}/>
        <Route path="/signup" element={<SignUp handleNewUser={handleNewUser} />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
