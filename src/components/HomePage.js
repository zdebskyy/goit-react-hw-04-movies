import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchApi from "../API/FetchMethods";

export default class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetchApi
      .fetchGetTrending()
      .then((data) => this.setState({ movies: [...data.results] }));
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
