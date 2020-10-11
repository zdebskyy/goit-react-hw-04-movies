import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
