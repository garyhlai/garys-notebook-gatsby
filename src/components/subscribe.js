import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)

        this.setState({
          message: "Success, you have been subscribed to the mailing list!",
          email: ""
        });
        console.log(this.state.message);
      });

    //this.setState(e.target.value);
    //console.log(this.state.email);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".tooltipped");
    const M = window.M;
    var instances = M.Tooltip.init(elems);
    console.log("new script was loaded");
  }

  render() {
    return (
      <div>
        <form id="subscribe-blog" onSubmit={this.handleSubmit}>
          <input
            id="newsletter"
            type="email"
            style={{ width: "50%" }}
            value={this.state.email}
            placeholder="Enter your email address"
            onChange={this.handleChange}
          />

          <button
            class="btn waves-effect waves-light grey darken-4"
            type="submit"
            name="action"
          >
            subscribe
            <i class="material-icons right">send</i>
          </button>
        </form>
        <p class="green-text">{this.state.message}</p>
        <a
          href="https://twitter.com/gary_doesnt_lai"
          className="tooltipped btn-floating btn-small grey darken-4"
          data-tooltip="Twitter"
          data-position="top"
        >
          <i class="fab fa-twitter" />
        </a>
        <a
          href="https://medium.com/@garylai_34633"
          className="tooltipped btn-floating btn-small grey darken-4"
          data-tooltip="Medium"
          data-position="top"
        >
          <i class="fab fa-medium" />
        </a>
        <a
          href="https://www.instagram.com/garys_notebook"
          className="tooltipped btn-floating btn-small grey darken-4"
          data-tooltip="Instagram"
          data-position="top"
        >
          <i class="fab fa-instagram" />
        </a>
      </div>
    );
  }
}
