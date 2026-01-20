import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Film de science-fiction",
      posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
      rate: 5,
    },
    {
      title: "Interstellar",
      description: "Voyage dans l'espace",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rate: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= rateFilter
  );

  return (
    <div>
      <h1>🎬 Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
