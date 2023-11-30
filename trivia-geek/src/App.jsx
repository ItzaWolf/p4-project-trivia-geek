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

  // const displayQuizes = quizes.filter((quizes) => {
  //   return quizes.name.toLowerCase().includes(search.toLowerCase());
  // });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage quizes={quizes} />} />
        {/* <Route path="/user/:id" element={<User />} /> */}
        {/* <Route path="/quiz/:id" element={<Quiz />} /> */}
        <Route path="/new" element={<SignUp handleNewUser={handleNewUser} />} />
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
