import React, { Component } from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    // create default state
    this.state = { name: "", imageUrl: "" };
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    console.log(`in onFieldChange, event = `, event);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        <div className="AddAuthorForm__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>

        <div className="AddAuthorForm__input">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          />
        </div>
      </form>
    );
  }
}

export default AuthorForm;
