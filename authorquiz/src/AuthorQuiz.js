import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

// components
import Hero from "./components/Hero";
import Turn from "./components/Turn";
import Continue from "./components/Continue";
import Footer from "./components/Footer";

function AuthorQuiz({ turnData }) {
  console.log(`turnData = ${turnData}}`);
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
