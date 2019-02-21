import React, { Component } from "react";
//import addToMailchimp from "gatsby-plugin-mailchimp";

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    /*
        addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })*/
    //this.setState(e.target.value);
    console.log(this.state.email);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <form
          id="subscribe-blog"
          autocomplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            type="email"
            value={this.state.value}
            placeholder="Enter your email address"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
