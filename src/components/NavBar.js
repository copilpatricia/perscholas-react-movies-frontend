import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function NavBar() {
  const themeCtx = useContext(ThemeContext);
  const { theme, setTheme } = themeCtx;
  console.log(themeCtx);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav>
      <h1>Movies fullstack app</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      <button onClick={handleClick} style={{ height: "40px", width: "50px" }}>
        {theme}
      </button>
    </nav>
  );
}

export default NavBar;
