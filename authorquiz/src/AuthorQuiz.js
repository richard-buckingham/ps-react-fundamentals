import React from "react";
import "./App.css";
import "./bootstrap.min.css";

// components
import Hero from "./components/Hero";
import Turn from "./components/Turn";
import Continue from "./components/Continue";
import Footer from "./components/Footer";

function AuthorQuiz({ turnData, highlight }) {
  console.log(`turnData = ${turnData}}`);
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
