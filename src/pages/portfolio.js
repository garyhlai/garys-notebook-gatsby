import React from "react";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import compress from "../images/Bathroom_Atlamtic_2.jpg";
import lifecycle from "react-pure-lifecycle";
import youva from "../images/youvaHome.png";
import deepdream from "../images/deepdream.png";
import chineseNotebook from "../images/myChineseNotebook.png";
import rhymer from "../images/rhymer.png";
import chord from "../images/chord.png";
const methods = {
  componentDidMount() {
    var elems = document.querySelectorAll(".materialboxed");
    var instances = window.M.Materialbox.init(elems);
  },
};

const cards = [
  [
    {
      img: chord,
      link: "https://github.com/ghlai9665/chord-suggestor",
      title: "Chord Suggestor",
      description:
        "Given an input sequence of chords, the LSTM model suggests the most likely next chords for songwriters.",
      stack: "Keras, Python, Flask",
    },
    {
      img: compress,
      link: "https://github.com/ghlai9665/YOUVA/tree/master/compress-image",
      title: "Image Compressor",
      description:
        "A python program that compresses images to less than 1% of their original sizes (compression rate exceeds most online image compressors). Solved the problem of slow loading for people whose websites require display of many photos.",
      stack: "Python",
    },
    {
      img: deepdream,
      link: "https://www.youtube.com/watch?v=sR8apqcw4uM",
      title: "Deep Dream",
      description:
        "An iteration of DeepDream on the logo of Cortex Labs - the idea is to maximize certain patterns in the image by performing gradient ascent on a specific activation layer of the neural network.",
      stack: "Python",
    },
  ],
  [
    {
      img: rhymer,
      link: "http://ec2-18-191-151-183.us-east-2.compute.amazonaws.com:3000",
      title: "Pocket-MC",
      description:
        "A rhymer that suggests rhymes by first querying the CMU pronouncing dictionary and then filtering relevant rhymes by word embedding similarity with a Word2Vec model. (Co-wrote the dictionary query part with a friend)",
      stack: "Python, Nodejs, Reactjs",
    },
    {
      img: youva,
      link: "http://www.youvahome.cn",
      title: "Youva Home",
      description:
        "A website designed for Youva Home, a tile shop in Hangzhou, China.",
      stack: "Html, Css, Javascript, Bootstrap",
    },
    {
      img: chineseNotebook,
      link: "https://github.com/ghlai9665/",
      title: "Chinese Notebook",
      description:
        "A web app that allows notetaking in Chinese. Upon entering Hanzi, the corresponding Pinyin and definition automatically shows up and are saved to notebooks.",
      stack: "Reactjs, Nodejs, Firebase",
    },
  ],
];

const PortfolioPage = () => {
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

        {cards.map((row) => {
          return (
            <div class="row">
              {row.map((card) => {
                const { img, link, title, description, stack } = card;
                return (
                  <div class="col s12 m4">
                    <div class="card">
                      <div class="card-image">
                        <img
                          class="materialboxed"
                          src={img}
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div class="card-content">
                        <a href={link}>
                          <span class="card-title blue-text">{title}</span>
                        </a>
                        <p>
                          <strong>Description:</strong> {description}
                        </p>
                        <p className="tech-stack">
                          <strong>Tech Stack:</strong> {stack}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <br />
        <Subscribe />
      </Layout>
    </div>
  );
};

export default lifecycle(methods)(PortfolioPage);
