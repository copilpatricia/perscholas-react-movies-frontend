import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://movies-fullstack-backend-apd9.onrender.com/api/movies/${params.id}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {movie && (
        <>
          <h4>Movie details</h4>
          <h5>{movie.title}</h5>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
