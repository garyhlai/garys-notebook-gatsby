import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Subscribe from "../components/subscribe";

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
            <div class="chip">
              <strong>{post.node.frontmatter.tags}</strong>
            </div>

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
    allMarkdownRemark {
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
