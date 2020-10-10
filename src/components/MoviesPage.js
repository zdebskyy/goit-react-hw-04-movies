import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import { Link } from "react-router-dom";

export default class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movie: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetchApi
      .fetchSearch(this.state.searchQuery)
      .then((movie) => this.setState({ movie: [...movie.results] }));
  };
  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <hr></hr>
        {movie && (
          <ul>
            {movie.map((m) => (
              <li key={m.id}>
                <Link
                  to={{
                    pathname: `/movies/${m.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {m.name ? m.name : m.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
