import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage";

function App() {
  return (
    <div>
      <header>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movie Page</NavLink>
        </ul>
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
