import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import compress from "../images/Bathroom_Atlamtic_2.jpg";
import givingLove from "../images/givingLove.png";
import workLog from "../images/workLog.png";
import lifecycle from "react-pure-lifecycle";
import alfred from "../images/Alfred.png";
import youva from "../images/youvaHome.png";
import shapeshift from "../images/shapeshift.png";
import deepdream from "../images/deepdream.png";
import chineseNotebook from "../images/myChineseNotebook.png";
import rhymer from "../images/rhymer.png";
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
              </div>
              <div class="card-content">
                <a href="https://github.com/ghlai9665/YOUVA/tree/master/compress-image">
                  <span class="card-title blue-text">Image Compressor</span>
                </a>
                <p>
                  <strong>Description:</strong> A python script that compresses
                  images by more than 1000% (compression rate exceeds most
                  online image compressors). Solved the problem of slow loading
                  for a client who needed a website that required the display of
                  many photos.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Python
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={deepdream}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="https://www.youtube.com/watch?v=sR8apqcw4uM">
                  <span class="card-title blue-text">DeepDream</span>
                </a>
                <p>
                  <strong>Description:</strong> An iteration of DeepDream on my
                  company's logo - the idea is to maximize certain patterns in
                  the image by performing gradient ascent on a specific
                  activation layer of the neural network.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Python
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={rhymer}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="http://ec2-18-191-151-183.us-east-2.compute.amazonaws.com:3000">
                  <span class="card-title blue-text">Pocket-MC</span>
                </a>
                <p>
                  <strong>Description:</strong> A rhymer that suggests rhymes by
                  first querying the CMU pronouncing dictionary and then
                  filtering relevant rhymes by word embedding similarity with a
                  Word2Vec model. (Co-wrote the dictionary query part with a
                  friend)
                </p>
                <p>
                  <strong>Tech Stack:</strong> Html, Css, Javascript
                </p>
                <br />
                <br />
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
                  src={youva}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="http://www.youvahome.cn">
                  <span class="card-title blue-text">
                    <span style={{ "margin-left:": "5px" }}>Youva Home</span>
                  </span>
                </a>
                <p>
                  <strong>Description:</strong> A website designed for Youva
                  Home, a tile shop in Hangzhou, China.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Html, Css, Javascript, Bootstrap
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={alfred}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="https://github.com/ghlai9665/alfredo">
                  <span class="card-title blue-text">Alfred</span>
                </a>
                <p>
                  <strong>Description:</strong> A mobile app (in development)
                  that facilitates doctor-patient communication. Patients can
                  directly text their doctors and texts will show up on the
                  doctor's end in an email-like interface.
                </p>
                <p>
                  <strong>Tech Stack:</strong> React Native, Firebase, Nodejs,
                  Nexmo API
                </p>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={chineseNotebook}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="#">
                  <span class="card-title blue-text">
                    <span style={{ "margin-left:": "5px" }}>
                      Chinese Notebook
                    </span>
                  </span>
                </a>
                <p>
                  <strong>Description:</strong> A web app that allows notetaking
                  in Chinese. Upon entering Hanzi, the corresponding Pinyin and
                  definition automatically shows up and are saved to notebooks.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Reactjs, Nodejs, Firebase, Google
                  Translate API
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
                  src={workLog}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="https://github.com/ghlai9665/worklog">
                  <span class="card-title blue-text">Sospiro</span>
                </a>
                <p>
                  <strong>Description:</strong> A work log that logs progress
                  against goals each day.
                </p>
                <p>
                  <strong>Tech Stack:</strong> Reactjs, GraphQL, MongoDB
                </p>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  class="materialboxed"
                  src={shapeshift}
                  style={{ height: "200px" }}
                />
              </div>
              <div class="card-content">
                <a href="https://github.com/ghlai9665/shapeshift-english">
                  <span class="card-title blue-text">Shapeshift English</span>
                </a>
                <p>
                  <strong>Description:</strong> A website built for an English
                  education startup in China. (Client self-substituted her own
                  contents and links)
                </p>
                <p>
                  <strong>Tech Stack:</strong> Html, Css, Javascript
                </p>
                <br />
                <br />
                <br />
                <br />
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
