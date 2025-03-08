import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import AddUser from "./components/addUser";
import Login from "./components/Login";
import "./App.css";
import { createContext, useContext, useState } from "react";
import First from "./components/Pages/First";
import Second from "./components/Pages/Second";

export const UserContext = createContext();

export const Themecontext = createContext();

function App() {
  const [user, setUser] = useState("admin");
  const [theme, setTheme] = useState(true);

  const dark = `
   body{
      background-color: black;
      color: rgb(254, 254, 254);
    }
  `;

  const light = `
    body{
  background-color: #fff;
  color: rgb(0, 0, 0);
}
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = theme ? light : dark;
  document.head.appendChild(style);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Themecontext.Provider value={{ theme, setTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="add_user" element={<AddUser />} />
              <Route path="login" element={<Login />} />
              <Route path="first" element={<First />} />
              <Route path="second" element={<Second />} />
            </Route>
          </Routes>
        </Router>
      </Themecontext.Provider>
    </UserContext.Provider>
  );
}

export default App;

const AppLayout = () => {
  const profile=useContext(UserContext)
  return (
    <>
      <nav className="flex justify-between bg-black p-[1rem]">
        <div className="flex gap-[1rem]">
          <Link to="/add_user " className="text-[#f5f5f5] hover:text-[#ccc]">
            Add User
          </Link>
          <Link to="/login" className="text-[#f5f5f5] hover:text-[#ccc]">
            Login
          </Link>
          <Link to="/login" className="text-[#f5f5f5] hover:text-[#ccc]">
            Login
          </Link>
          <Link to="/first" className="text-[#f5f5f5] hover:text-[#ccc]">
            first
          </Link>
          <Link to="/second" className="text-[#f5f5f5] hover:text-[#ccc]">
            second
          </Link>
        </div>
        <div className="">
          <h1 className="text-white">{profile.user}</h1>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
