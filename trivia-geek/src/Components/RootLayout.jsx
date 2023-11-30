import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav class="flex justify-evenly">
          <NavLink to="/">Home </NavLink>
          {/* <NavLink to="/user/<int:user_id>">Log In </NavLink> */}
          <NavLink to="/signup"></NavLink>
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