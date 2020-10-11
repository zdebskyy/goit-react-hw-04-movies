import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";
import Loader from "react-loader-spinner";

export default class Review extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetchApi
      .fetchGetMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews: [...reviews.results] }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;
    console.log(reviews);

    return (
      <div>
        {loading ? (
          <Loader />
        ) : reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>Review: {review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no review yet</p>
        )}
      </div>
    );
  }
}
