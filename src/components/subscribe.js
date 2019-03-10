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
  /*
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
          <input type="submit" />
        </form>
        <p>{this.state.message}</p>
      </div>


 <section class="widget widget_blog_subscription">
          <form
            action="/newsletter"
            method="post"
            id="subscribe-blog"
            autocomplete="off"
            onSubmit="handleSubscribe(event) & showHide()"
          >
            <p>Subscribe</p>
            <p>
              <input
                type="name"
                name="subscribe[name]"
                placeholder="Enter your name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter your name'"
                value=""
                id="name"
              />
              <input
                type="email"
                name="subscribe[email]"
                placeholder="Enter your email address"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter your email address'"
                value=""
                id="email"
              />
            </p>

            <div id="hidden_div">
              <div id="newsletterSuccess">
                <header />
                <p>
                  <i class="check circle icon" />
                  You're all signed up for the newsletter.
                </p>
              </div>
            </div>

            <p>
              <input type="submit" value="Follow me!" />
            </p>
          </form>
        </section>





   */

  render() {
    return (
      <div>
        <form
          id="subscribe-blog"
          autocomplete="off"
          onSubmit={this.handleSubmit}
        >
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
      </div>
    );
  }
}
