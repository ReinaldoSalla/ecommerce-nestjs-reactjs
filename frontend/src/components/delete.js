import React from "react";

export default class Updater extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/api/products/${this.state.id}`, {
      method: "delete"
    });
  }

  render() {
    return (
      <div>
        <h1>Delete one product</h1> 
        <form onSubmit={this.onSubmit}>
          <label>Product id</label>
          <br />
          <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
          <br /> <br />
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}