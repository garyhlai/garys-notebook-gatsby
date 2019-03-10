import React from "react";
//import { nominalTypeHack } from "prop-types";
import Link from "gatsby-link";

const Menu = () => (
  <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
