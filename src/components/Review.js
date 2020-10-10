import React, { Component } from "react";
import fetchApi from "../API/FetchMethods";

export default class Review extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    fetchApi
      .fetchGetMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews: [...reviews.results] }));
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);

    return (
      <div>
        {reviews > 0 ? (
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
