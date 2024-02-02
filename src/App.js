import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
//context
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  //useState
  // later - we are going to receive the array of 10 objects - we can pass an empty array for now
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  //useEffect -always on the top
  useEffect(() => {
    //connect to the backend
    //async function inside the useEffect - we can not use useEffect((async function))!!
    //useEffect makes the request as soon as the App component renders to the browser( as soon as the application loads); doesn't wait for the user interaction(click a button or something else)

    const fetchData = async () => {
      const res = await fetch("https://movies-fullstack-backend-apd9.onrender.com/api/movies");
      const data = await res.json();
      console.log(data);

      // set the data to the state movies variables - the array is empty this is why we don't need to make a copy like we used to
      setMovies(data);
    };
    //call the function after the definition
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>


          {user ? (
            <>
              <NavBar />

              <Routes>
                <Route path="/about" element={<h3>About</h3>} />
                <Route
                  path="/movies"
                  element={<MoviesList movies={movies} />}
                />
                <Route path="/movies/:id" element={<MovieDetails />} />
              </Routes>
            </>
          ) : (
            <MainPage />
          )}


        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
