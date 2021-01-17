import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <Layout>
        <Link to="/">
          {" "}
          <i class="material-icons">arrow_back</i>
        </Link>
        <hr />
        <h2>{post.frontmatter.title}</h2>
        <small>Posted on {post.frontmatter.date}</small>
        <br />
        <br />
        <div className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <br />
        <br />
        <br />
        <Subscribe />
      </Layout>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags
      }
    }
  }
`;
