import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    // create default state
    this.state = {
      name: "",
      imageUrl: "",
      books: ["book 1", "book 2"],
      bookTemp: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleSubmit(event) {
    console.log("in handleSubmit");
    event.preventDefault();
    console.log("in handleSubmit, calling this.props.onAddAuthor(this.state)");
    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    console.log("in onFieldChange");
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddBook(event) {
    console.log("in handleAddBook");
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

        <div className="AddAuthorForm__input">
          {/* Display current books */}
          {this.state.books.map(book => (
            <p key={book}>{book}</p>
          ))}
          {/* Add a new book  */}
          <label htmlFor="tempBook">Books</label>
          <input
            type="text"
            name="bookTemp"
            value={this.state.bookTemp}
            onChange={this.onFieldChange}
          />
          <input type="button" value="+" onClick={this.handleAddBook} />
        </div>
        <br />

        <input type="submit" value="Add Author" />
      </form>
    );
  }
}

export default AuthorForm;
