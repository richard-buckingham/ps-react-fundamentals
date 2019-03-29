import React from "react";

import AuthorForm from "./AuthorForm";

import "./AddAuthorForm.css";

function AddAuthorForm({ match }) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm />
    </div>
  );
}

export default AddAuthorForm;
