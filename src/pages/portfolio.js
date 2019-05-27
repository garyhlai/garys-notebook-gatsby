import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import compress from "../images/Bathroom_Atlamtic_2.jpg";
import givingLove from "../images/givingLove.png";
import workLog from "../images/workLog.png";
import lifecycle from "react-pure-lifecycle";
//import Layout from "../components/layout";
const methods = {
  componentDidMount() {
    var elems = document.querySelectorAll(".materialboxed");
    var instances = window.M.Materialbox.init(elems);
  }
};

const PortfolioPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2>
          <br />
          Project Highlights{" "}
          <a href="https://github.com/ghlai9665/">
            <i class="fab fa-github" />
          </a>
          <br />
          <br />
        </h2>
        <div class="row">
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={compress}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/YOUVA/tree/master/compress-image">
                  <span class="card-title white-text">
                    <strong>Image Compressor</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A python script that compresses
                  images by more than 1000% (way greater compression rate than
                  most online image compressor).
                </p>
                <p>
                  <strong>Tech Stack:</strong> Python
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={givingLove}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/givingLove/tree/b70b1fb6b8792bbad19f6c2bb53bb220471300f9">
                  <span class="card-title black-text">
                    <strong>Giving Love</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A web app that lets you give
                  whatever you want: love, positivity, fucks etc... But try to
                  keep it positive and PG13 please :) .
                </p>
                <p>
                  <strong>Tech Stack:</strong> Html, Css, Javascript
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={workLog}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/worklog">
                  <span class="card-title black-text">
                    <strong>Sospiro</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A work log that collects your
                  goal and logs your progress each day.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Reactjs, GraphQL, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={compress}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/YOUVA/tree/master/compress-image">
                  <span class="card-title white-text">
                    <strong>Image Compressor</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A python script that compresses
                  images by more than 1000% (way greater compression rate than
                  most online image compressor).
                </p>
                <p>
                  <strong>Tech Stack:</strong> Python
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={givingLove}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/givingLove/tree/b70b1fb6b8792bbad19f6c2bb53bb220471300f9">
                  <span class="card-title black-text">
                    <strong>Giving Love</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A web app that lets you give
                  whatever you want: love, positivity, fucks etc... But try to
                  keep it positive and PG13 please :) .
                </p>
                <p>
                  <strong>Tech Stack:</strong> Html, Css, Javascript
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={workLog}
                  style={{ height: "200px" }}
                />
                <a href="https://github.com/ghlai9665/worklog">
                  <span class="card-title black-text">
                    <strong>Sospiro</strong>
                  </span>
                </a>
              </div>
              <div class="card-content">
                <p>
                  <strong>Description:</strong> A work log that collects your
                  goal and logs your progress each day.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Reactjs, GraphQL, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>

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

//export default PortfolioPage;
export default lifecycle(methods)(PortfolioPage);
