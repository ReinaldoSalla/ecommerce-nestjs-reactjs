import React from "react";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
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
    fetch(`http://localhost:3000/api/products/${this.state.id}`, {
    	method: "UPDATE",
    	headers: {"contente-type": "application/json"},
    	body: JSON.stringify(body)
    })
    .catch(err => console.error(err));
  }

  render() {
  	return (
  		<div>
  			<h1>Update one product</h1>
  		</div>
  	);
  }
}