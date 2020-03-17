import React from "react";

export default class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      subcategory: '',
      name: '',
      price: 0,
      available: true,
      amount: 0,
      release: '2010-05-01'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  onSubmit(event) {
    event.preventDefault();
    const body = {
      category: this.state.category,
      subcategory: this.state.subcategory,
      name: this.state.name,
      price: parseFloat(this.state.price),
      available: this.state.available,
      amount: parseInt(this.state.amount),
      release: this.state.release
    };
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(body)
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Add new product</h1>
        <form onSubmit={this.onSubmit}>
            <label>Category</label>
            <br />
            <input type="text" name="category" value={this.state.category} onChange={this.onChange} />
            <br />
            <label>Subcategory</label>
            <br />
            <input type="text" name="subcategory" value={this.state.subcategory} onChange={this.onChange} />
            <br />
            <label>Name</label>
            <br />
            <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
            <br />
            <label>Price</label>
            <br />
            <input type="number" name="price" value={this.state.price} onChange={this.onChange} min="0" step="0.1" />
            <br />
            <label>Amount</label>
            <br />
            <input type="number" name="amount" value={this.state.amount} onChange={this.onChange} min="0" step="1" />
            <br /> <br />
            <button type="submit">Add</button>
        </form>
      </div>
    ) 
  }
}