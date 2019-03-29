import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    // create default state
    this.state = { name: "", imageUrl: "" };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("in handleSubmit, calling this.props.onAddAuthor(this.state)");
    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddBook(event) {
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AuthorForm;
