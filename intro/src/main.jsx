import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

/**
 * Challenge:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);
