import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import Loader from "react-loader-spinner";
import styles from "../CSS/Main.module.css";

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
        ) : casts.length > 0 ? (
          <ul className={styles.castList}>
            {casts.map((cast) => (
              <li key={cast.id} className={styles.castItem}>
                <p>
                  Name: {cast.name}, Character: {cast.character}
                </p>
                {cast.profile_path ? (
                  <img
                    src={"https://image.tmdb.org/t/p/w200" + cast.profile_path}
                    alt={cast.name}
                  />
                ) : (
                  <img
                    src="https://www.oakwoodinsurance.com/wp-content/uploads/2019/04/headshot-placeholder.jpeg"
                    alt="defaultImg"
                    className={styles.defaultImg}
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no information yet</p>
        )}
      </div>
    );
  }
}
