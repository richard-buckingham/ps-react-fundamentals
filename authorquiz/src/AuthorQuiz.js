import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

// components
import Hero from "./components/Hero";
import Turn from "./components/Turn";
import Continue from "./components/Continue";

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
      </div>
    );
  }
}

export default AuthorQuiz;
