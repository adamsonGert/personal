import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query headerQueryAndHeaderQuery {
      allDataJson {
        edges {
          node {
            name
            logo {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  quality: 100
                )
              }
            }
            link
          }
        }
      }
    }
  `);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const ref = useRef();

  const items = data.allDataJson.edges;

  return (
    <Section id='portfolio'>
      <PortfolioWrapper ref={ref}>
        {items.map(({ node }, index) =>
          <Link 
            to={`${node.link}`} 
            key={index} 
            className={`portfolio-item ${isPageLoaded ? 'page-loaded' : ''}`}
            style={!isPageLoaded ? { opacity: 0, transform: 'translateY(-20px)' } : {}}
          >
            {node.logo && <GatsbyImage image={node.logo.childImageSharp.gatsbyImageData} alt={`${node.name} image`} />}
          </Link>
        )}
      </PortfolioWrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  width: 100%;
  padding: 100px 0 50px;
  min-height: calc(100vh - 148px);

  @media (min-width: 767px) {
    align-self: center;
    min-height: calc(100vh - 48px);
  }
`;

const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .portfolio-item {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    border: 1px solid var(--formBorder);
    background: var(--portfolioItemBg);
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity .5s ease-out, transform .5s ease-out;

    &.page-loaded {
      opacity: 1;
      transform: translateY(0);
  }

    &:nth-child(1).page-loaded { transition-delay: .2s; }
    &:nth-child(2).page-loaded { transition-delay: .4s; }
    &:nth-child(3).page-loaded { transition-delay: .6s; }
    &:nth-child(4).page-loaded { transition-delay: .8s; }
    &:nth-child(5).page-loaded { transition-delay: 1s; }
    &:nth-child(6).page-loaded { transition-delay: 1.2s; }
    &:nth-child(7).page-loaded { transition-delay: 1.4s; }
    &:nth-child(8).page-loaded { transition-delay: 1.6s; }
    &:nth-child(9).page-loaded { transition-delay: 1.8s; }
    &:nth-child(10).page-loaded { transition-delay: 2s; }

    @media (min-width: 1440px) {
      height: 100%;
    }

    &:hover {
      border: 1px solid var(--formBorderHover);
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

export default Portfolio;
