import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
//import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p>{post.node.excerpt}</p>
            <small>
              Posted by {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <br />
          </div>
        ))}
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
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
