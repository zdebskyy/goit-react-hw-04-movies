import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";

export default class Cast extends Component {
  state = {
    casts: [],
  };
  componentDidMount() {
    fetchApi
      .fetchGetMovieCredits(this.props.match.params.movieId)
      .then((data) => this.setState({ casts: [...data.cast] }));
  }

  render() {
    const { casts } = this.state;
    // console.log(casts);

    return (
      <div>
        {casts && (
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
        )}
      </div>
    );
  }
}
