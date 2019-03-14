import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.group.map(tag => (
          <div class="chip">
            <Link to={`/tags/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </div>
        ))}
      </div>
    )}
  />
);
