import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../CSS/Main.module.css";

export default function Navigation() {
  return (
    <header>
      <ul className={styles.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie Page</NavLink>
      </ul>
    </header>
  );
}
