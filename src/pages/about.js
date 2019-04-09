import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
//import Layout from "../components/layout";

const AboutPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2 id="who-am-I">
          <br />
          Who Am I?
          <br />
        </h2>
        <p>Hi folks, </p>

        <p>
          My name is Gary Haizhi Lai and I am an indie maker{" "}
          <i class="em em-hammer_and_wrench" /> and a full-stack freelancer{" "}
          <i class="em em-herb" /> (contact me at{" "}
          <strong>glai9665@gmail.com</strong> for work). I recently graduated
          from Columbia University in NYC and set out to travel the world while
          working remotely.{" "}
        </p>
        <p>
          I invested a little bit of money in Ethereum back in 2016{" "}
          <i class="em em-moneybag" />
          which has bought me the opportunity to explore this kind of digital
          nomad lifestyle. <i class="em em-beach_with_umbrella" /> I have been
          programming for two years but mostly just class projects, nothing
          serious. Now I have more time, I am super excited to unleash my
          creativity and actually ship things.{" "}
        </p>
        <p>
          I’m starting this blog here in order to share my notes on
          miscellaneous programming and traveling topics as I come across them.{" "}
          <i class="em em-nerd_face" /> By explaining things, I can understand
          them better while providing values to others. Meanwhile, I hope to
          connect with and learn from fellow programmers and travelers who find
          my blog posts useful. <i class="em em-handshake" />
        </p>
        <p>
          I will start a regular newsletter soon - subscribe if you’d like to
          follow my notes and connect!
        </p>
        <p>
          Best, <i class="em em-heart" /> <br />
          Gary
        </p>
        <br />
        <br />
        <Subscribe />
      </Layout>
    </div>
  );
};

/*
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;*/

export default AboutPage;
