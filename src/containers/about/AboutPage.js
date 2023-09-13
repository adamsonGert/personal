import React from 'react';
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaArrowRight } from 'react-icons/fa';

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
          <p>A front-end developer who focuses on writing clean code that breaks the design down into the components and providing best solutions to user related problems. I would describe myself as someone who is consistently growing, versatile, and ambitious. Outside of programming, I enjoy video games, Netflix shows, sushi, and creating good memories with my friends.</p>
          <p>Here are a few technologies I've worked with:</p>
          <ul className="technology-list">
            <li><FaArrowRight />HTML & (S)CSS</li>
            <li><FaArrowRight />Javascript</li>
            <li><FaArrowRight />Wordpress</li>
            <li><FaArrowRight />Styled Components</li>
            <li><FaArrowRight />React & Gatsby</li>
            <li><FaArrowRight />Hubspot</li>
            <li><FaArrowRight />NextJS</li>
            <li><FaArrowRight />VueJS</li>
          </ul>
      </AboutText>
      <figure className="image-wrapper">
        {data.profile && (
          <GatsbyImage
            className="profile-image"
            image={data.profile.childImageSharp.gatsbyImageData }
            alt="Profile Image"
          />
        )}
      </figure>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  grid-template-columns: 3fr 3fr;
  gap: 65px;
  padding-top: 100px;
  min-height: calc(100vh - 148px);

  @media (min-width: 768px) {
    display: grid;
    padding-top: 0;
    min-height: calc(100vh - 48px);
  }

  .image-wrapper {
    width: 100%;
    animation: slideInFromRight 1s forwards;
    transition: all 1s ease;
    transition: opacity 1s cubic-bezier(.23, 1, .32, 1), transform 1s cubic-bezier(.23, 1, .32, 1);

    @media (max-width: 768px) {
      animation: slideInFromBottom 1s forwards;
    }

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
  opacity: 0;
  animation: slideInFromLeft 1s forwards;
  transition: opacity 1s cubic-bezier(.23, 1, .32, 1), transform 1s cubic-bezier(.23, 1, .32, 1);

  @media (max-width: 768px) {
    animation: slideInFromBottom 1s forwards;
    animation-delay: .25s;
  }

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
      padding: 16px 0 0 calc(16px * 2);
      display: flex;
      align-items: center;

      svg {
        position: absolute;
        top: var(--spacer);
        left: 0;
        color: var(--primary);
      }
    }
  }

  @keyframes slideInFromLeft {
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(20%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(20%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

`;
  
export default About;