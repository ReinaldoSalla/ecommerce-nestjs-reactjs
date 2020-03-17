import React from "react";

export default class Deleter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log(event.target.name)
    console.log(event.target.value);
  };

  onSubmit(event) {
    //
  }

  render() {
    return (
      <div>
        <h1>Delete one product</h1> 
      </div>
    )
  }
}