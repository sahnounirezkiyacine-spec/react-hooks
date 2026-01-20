import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rate: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie">
      <input
        name="title"
        placeholder="Titre"
        value={movie.title}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleChange}
      />
      <input
        name="posterURL"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={handleChange}
      />
      <input
        name="rate"
        type="number"
        placeholder="Note"
        value={movie.rate}
        onChange={handleChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovie;
