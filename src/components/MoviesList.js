import MovieItem from "./MovieItem";
import Spinner from 'react-bootstrap/Spinner';

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function MoviesList({ movies }) {
  const themeCtx = useContext(ThemeContext);
  const {theme} = themeCtx
  return (
    <div className={theme === 'light' ? 'lightMode' : 'darkMode'}>
      <div>
        {movies.length >= 1 ?
          movies.map((movie) => <MovieItem movie={movie} key={movie._id} />): 
          <Spinner animation="grow" role="status" as="span">
             <span>Loading...</span>
          </Spinner>
          }
      </div>
    </div>
  );
}

export default MoviesList;

// If movies is true => display the title - if we initialize the intial state as null
// If we initialize it as an empty error - there is no error
// {movies && movies.map((movie) => (
//     <h1>{movie.title}</h1>
//   ))}

//OR

// {movies.length > 1 && movies.map((movie) => (
//     <h1>{movie.title}</h1>
//   ))}
