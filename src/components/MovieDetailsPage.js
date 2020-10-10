import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import { Link, Route } from "react-router-dom";
import Cast from "./Cast";
import Review from "./Review";

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
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push("/");
  };

  render() {
    console.log(this.props.match);
    // console.log(this.props.location);
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

            <Link
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </Link>
            <Route path={`${this.props.match.path}/cast`} component={Cast} />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Link
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </Link>
            <Route
              path={`${this.props.match.path}/reviews`}
              component={Review}
            />
          </>
        )}
      </div>
    );
  }
}