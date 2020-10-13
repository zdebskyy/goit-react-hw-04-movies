import React from "react";
import styles from "../CSS/Main.module.css";

export default function Movie({ movie }) {
  return (
    <>
      {movie.poster_path ? (
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
      ) : (
        <img
          src="https://xn--80akcc0bafj4i.xn----dtbfcraoecflfgcbgt4b8c0i.org/wp-content/uploads/2014/09/default-placeholder.png"
          alt="No poster"
          className={styles.defaultPoster}
        />
      )}
      <p>Title : {movie.original_title}</p>
      <p>User popularity : {movie.popularity}</p>
      <p>Overview : {movie.overview}</p>
      <ul>
        Genres:
        {movie.genres.map((genre) => (
          <li key={genre.id}> {genre.name}</li>
        ))}
      </ul>
    </>
  );
}
