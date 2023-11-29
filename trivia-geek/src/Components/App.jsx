import './App.css'
import { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import FormLayout from "./layout/FormLayout";
import NewNpoForm from "./components/NewNpoForm";

function App() {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:")
      .then((res) => res.json())
      .then((quizesArray) => {
        setQuizes(quizesArray);
      });
  }, []);

  function handleNewUser(newUser) {
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
  }

  const displayQuizes = quizes.filter((quizes) => {
    return quizes.name.toLowerCase().includes(search.toLowerCase());
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/user, /user/, /user/<int:user_id>" element={<User />} />
        <Route path="/gamesession/<int:session_id>" element={<GameSession />} />
        <Route path="/question/<int:question_id>" element={QuestionResource} />
        <Route path="new" element={<NewUserForm handleNewUser={handleNewUser} />}></Route>
        <Route path="/quiz, /quiz/<int:quiz_id>" element={<Quiz />}></Route>
      </Route>
    )
  );
  return (
      <>
      <RouterProvider router={router} />
      </>
  
  )
}

export default App;


