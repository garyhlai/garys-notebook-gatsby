import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Subscribe from "../components/subscribe";
// Utilities
import kebabCase from "lodash/kebabCase";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Layout>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p>{post.node.excerpt}</p>

            {post.node.frontmatter.tags.map(tag => (
              <div class="chip">
                <Link to={`/tags/${tag.toLowerCase()}/`}>{tag}</Link>
              </div>
            ))}

            {/*
            <small>
             Posted on {post.node.frontmatter.date}
              <Link to={post.node.frontmatter.path} class="blue-text">
                Read More
              </Link>
            </small>*/}

            <br />

            <br />
            <br />
            <br />
          </div>
        ))}
        <Subscribe />
      </Layout>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            tags
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
