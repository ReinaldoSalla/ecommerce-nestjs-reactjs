import React from "react";

export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  
  componentDidMount() {
    return fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          products: data
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading content...</h1>
    } else {
      const listItems = this.state.products.map(product => 
        <li key={product.name}> 
          {product.category} {product.subcategory} {product.name} {product.price} {product.available} {product.amount} {product.release} 
        </li>
      )
      return (
        <div>
          <h1>Products</h1>
          <ul>{listItems}</ul>
        </div>
      )
    }
  }
}