import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Home = ({ data }) => {
  const {
    introduction: {
      childMarkdownRemark: { html }
    }
  } = data.allContentfulHome.edges[0].node;

  return (
    <Layout nav={false}>
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allContentfulHome {
      edges {
        node {
          introduction {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
