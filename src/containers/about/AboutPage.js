import React from 'react';
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "portrait.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Section id='about'>
      <AboutText>
        <span className="section-title">About</span>
        <div>
          <p>A front-end developer who focuses on writing clean code that breaks the design down into the components and providing best solutions to user related problems. I would describe myself as someone who is consistently growing, versatile, and ambitious. Outside of programming, I enjoy video games, Netflix shows, sushi, and creating good memories with my friends.</p>
          <p>Here are a few technologies I'm familiar with:</p>
        </div>
        <div>
          <ul className="technology-list">
            <li>HTML & (S)CSS</li>
            <li>Javascript</li>
            <li>Wordpress</li>
            <li>Styled Components</li>
            <li>React & Gatsby</li>
            <li>Hubspot</li>
          </ul>
        </div>
      </AboutText>
      <div className="image-wrapper">
        {data.profile && (
          <GatsbyImage
            className="profile-image"
            image={data.profile.childImageSharp.gatsbyImageData }
            alt="Profile Image"
          />
        )}
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: block;
  align-items: center;
  grid-template-columns: 3fr 3fr;
  gap: 65px;
  padding-top: 100px;
  height: 100vh;

  @media (min-width: 767px) {
    display: grid;
    padding-top: 0;
  }

  .image-wrapper {
    width: 100%;

    .profile-image {
      width: 300px;
      height: auto;
      margin: 0 auto;

      @media (min-width: 768px) {
        margin: 0;
        margin-left: auto;
      }
    }
  }

  .section-title {
    display: block;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 14px;
  }
`;

const AboutText = styled.div`
  font-size: 18px;
  color: var(--text);
  line-height: 1.75;
  margin-bottom: 20px;

  .technology-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    font-size: 16px;
    padding: 0;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 25px;
      color: var(--text);

      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--primary);
        font-size: 15px;
        line-height: 28px;
      }
    }
  }
`;
  
export default About;