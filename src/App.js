import React from "react";
import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path="/"
            exact
            component={lazy(() =>
              import(
                "./components/HomePage" /* webpackChunkName: "home-page" */
              )
            )}
          />
          <Route
            path="/movies"
            exact
            component={lazy(() =>
              import(
                "./components/MoviesPage" /* webpackChunkName: "movie-page" */
              )
            )}
          />
          <Route
            path="/movies/:movieId"
            component={lazy(() =>
              import(
                "./components/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
              )
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
