import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchApi from "../API/FetchMethods";
import styles from "../CSS/Main.module.css";

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
    // console.log(movies);

    return (
      <>
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.listItem}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
