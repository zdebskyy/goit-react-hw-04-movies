import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    fetchApi
      .fetchGetMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));
  }
  handleGoBack = () => {
    this.props.history.push("/movies");
  };

  render() {
    const { movie } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <br></br>
        <br></br>
        {movie && (
          <>
            <img src={movie.poster_path} alt={movie.title} />
            <p>Title : {movie.original_title}</p>
            <p>User popularity : {movie.popularity}</p>
            <p>Overview : {movie.overview}</p>
            {movie.genres.map((genre) => (
              <ul key={genre.id}>
                <li>{genre.name}</li>
              </ul>
            ))}
          </>
        )}
      </div>
    );
  }
}
