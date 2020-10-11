import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import Loader from "react-loader-spinner";

export default class Cast extends Component {
  state = {
    casts: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetchApi
      .fetchGetMovieCredits(this.props.match.params.movieId)
      .then((data) => this.setState({ casts: [...data.cast] }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { casts, loading } = this.state;
    // console.log(casts);

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          casts && (
            <ul>
              {casts.map((cast) => (
                <li key={cast.id}>
                  <p>
                    Name: {cast.name}, Character: {cast.character}
                  </p>
                  <img src={cast.profile_path} alt={cast.name} />
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    );
  }
}
