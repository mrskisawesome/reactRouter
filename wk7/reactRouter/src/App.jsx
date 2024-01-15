import { Link, Routes, Route } from "react-router-dom";
import HomePage from ".Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <>
      <div className="header">
        <h1>Welcome to my website</h1>
        <Link className="navlink home" to="/">
          Home
        </Link>
        <Link className="navlink about" to="/about">
          About
        </Link>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}
