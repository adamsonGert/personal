import React, { useRef } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Img from "gatsby-image"
import { Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
  query headerQueryAndHeaderQuery {
    allDataJson {
      edges {
        node {
            name
            logo {
              childImageSharp {
                  fluid(maxWidth: 4000) {
                  ...GatsbyImageSharpFluid_noBase64
                  }
              } 
          }
          link
        }
      }
    }
  }
`)

  const ref = useRef()

  const items = data.allDataJson.edges;
  
  return (
      <Section id='portfolio'>
      <PortfolioWrapper ref={ref}>
          {items.map(({ node }, index) =>
              <Link to={`${node.link}`} key={index} className="portfolio-item">
                  {node.logo &&
                      <Img fluid={node.logo.childImageSharp.fluid} alt={`${node.name} image`} />
                  }
              </Link>
              
          )}
      </PortfolioWrapper>
      </Section>
      )
    }

    const Section = styled.section`
    width: 100%;
    padding: 100px 0 50px;
    
    @media (min-width: 767px) {
      align-self: center;
    }
  `;
  
  const PortfolioWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    color: white;
    justify-content: space-between;
    width: 100%;
  
    .portfolio-item {
      width: 100%;
      height: auto;
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      margin-bottom: .7rem;
      border: 1px solid var(--formBorder);
      cursor: pointer;
      overflow: hidden;
  
      @media (min-width: 992px) {
          width: calc(65% / 2);
      }
  
  
      &:hover {
        border: 3px solid var(--formBorder);
          img {
              opacity: 1 !important;
          }
      }
  
      img {
          filter: var(--image);
          margin: 0 auto;
          opacity: 0.3 !important; 
          transition: opacity 1s ease-in-out;
      }
    }
  `;