import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import { Link, Route } from "react-router-dom";
import Cast from "./Cast";
import Review from "./Review";
import Movie from "./Movie";
import Loader from "react-loader-spinner";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetchApi
      .fetchGetMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push("/");
  };

  render() {
    // console.log(this.props.match);
    // console.log(this.props.location);
    const { movie, loading } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <br></br>
        <br></br>
        {loading ? (
          <Loader />
        ) : (
          movie && (
            <>
              <Movie movie={movie} />

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
          )
        )}
      </div>
    );
  }
}
