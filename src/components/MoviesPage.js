import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import { Link } from "react-router-dom";
import queryString from "query-string";
import styles from "../CSS/Main.module.css";

export default class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movie: [],
    error: null,
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);

    if (query) {
      fetchApi
        .fetchSearch(query)
        .then((movie) => this.setState({ movie: [...movie.results] }))
        .catch((error) => this.setState({ error }));
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.searchQuery}`,
    });

    this.state.searchQuery &&
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
          <ul className={styles.list}>
            {movie.map((m) => (
              <li key={m.id} className={styles.listItem}>
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
