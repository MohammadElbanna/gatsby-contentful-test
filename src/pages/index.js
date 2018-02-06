import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  let brands = data.allContentfulBrand.edges;
  return (
    <div>
      {brands.map(({ node }) =>
        <div key={node.id}>
          <h2>{node.companyName.companyName}</h2>
          <ul>
            {node.product && node.product.map(product => <li key={product.id}>{product.productName.productName}</li>)}
          </ul>
        </div>)}
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query ContentfulData {
    allContentfulBrand {
      edges {
        node {
          id
          companyName {
            companyName
          }
          product {
            id
            productName {
              productName
            }
          }
        }
      }
    }
  }
`;
