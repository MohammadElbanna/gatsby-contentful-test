module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "vslo4119l6eu",
        accessToken: "0f64fe43ce0ed376fda7608dea00027e98e6276bc073064bd023a2ebf8262b5a"
      }
    },
    'gatsby-plugin-react-helmet'
  ],
};
