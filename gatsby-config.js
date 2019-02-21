module.exports = {
  siteMetadata: {
    title: "Gary's Notebook"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://garysnotebook.us20.list-manage.com/subscribe/post?u=6779237f2083553bebfc861de&amp;id=67883bced5" // see instructions section below
      }
    }
  ]
};
