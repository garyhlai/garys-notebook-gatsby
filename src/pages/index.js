import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};
export default IndexPage;
