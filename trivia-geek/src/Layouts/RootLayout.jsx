import { NavLink, Outlet } from "react-router-dom";
import SignUp from "../Components/SignUp";

function RootLayout() {
  return (
    <div>
      <header>
        <nav class="flex justify-evenly">
          <NavLink to="/">Home </NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/quiz">Quiz </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;