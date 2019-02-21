import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Who am I?</h1>
        <p>
          Hi guys,
          <br /> <br />
          <p>
            My name is Gary Haizhi Lai and I am an indie maker and a freelance
            web dev (contact me at <strong>glai9665@gmail.com</strong> for
            work). I recently graduated from Columbia University in NYC and set
            out to travel the world while working remotely.{" "}
          </p>
          <p>
            I invested a little bit of money in Ethereum back in 2016 which has
            bought me the opportunity to explore this kind of digital nomad
            lifestyle. I have been programming for two years but mostly just
            class projects, nothing serious. Now I have more time, I am super
            excited to unleash my creativity and actually ship things.{" "}
          </p>
          <p>
            I’m starting this blog here in order to share my notes on
            miscellaneous programming and traveling topics as I come across
            them. By explaining things, I can understand them better while
            providing values to others. Meanwhile, I hope to connect with and
            learn from fellow programmers and travelers who find my blog posts
            useful.
          </p>
          <p>
            I will start a regular newsletter soon - subscribe if you’d like to
            follow my notes and connect!
          </p>
          <br />
          Best, <br />
          Gary
          <br />
          <br />
        </p>
        {/*<form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="name" placeholder="Your name.." type="text" />
          <button>Subscribe</button>
        </form>*/}
        <Subscribe />
      </Layout>
    </div>
  );
};
export default IndexPage;
