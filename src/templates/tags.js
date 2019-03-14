//Page that displays after you click on each tag
import React from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import AllTags from "../components/allTags";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div>
      <Layout>
        <h2 class="tagHeader">{tagHeader}</h2>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            const { excerpt } = node;
            return (
              <div>
                <h3 key={slug}>
                  <Link to={slug}>{title}</Link>
                </h3>
                <p>{excerpt}</p>
              </div>
            );
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              We'll come back to it!
                  <Link to="/tags">All tags</Link>
            */}
        <AllTags />
      </Layout>
    </div>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
