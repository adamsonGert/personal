import React from "react"
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaCalendarAlt, FaTag, FaSuitcase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HubspotWork = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: {eq: "portfolio/hubspot/hubspot-banner.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2022, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      platform: file(relativePath: {eq: "portfolio/hubspot/hubspot-platform.png"}) {
        childImageSharp {
          fluid(maxWidth: 453, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pages: file(relativePath: {eq: "portfolio/hubspot/gallery/xolo-blog.png"}) {
        childImageSharp {
          fluid(maxWidth: 610, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      interactive: file(relativePath: {eq: "portfolio/hubspot/gallery/lp-generator.png"}) {
        childImageSharp {
          fluid(maxWidth: 610, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigation: file(relativePath: {eq: "portfolio/hubspot/gallery/hubspot-email.png"}) {
        childImageSharp {
          fluid(maxWidth: 610, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
        <Section id="hero">
          <Link to='/portfolio' className="link-back"><FaArrowLeft />Projects</Link>
          <div className="banner-wrapper">
            <Img className="banner-img" fluid={data.banner.childImageSharp.fluid} />
          </div>
          <div className="about-wrapper">
            <h4>About Hubspot</h4>
            <p>HubSpot is an inbound marketing and sales platform that helps Xolo to attract visitors, convert leads and close customers. This includes content creation, social media sharing, workflow automation, lead capture, customer relationship management, sales pipeline mapping and performance tracking.</p>
          </div>
          <div className="grid grid-left grid-details">
            <figure className="grid-media">
                <Img className="platform-img" fluid={data.platform.childImageSharp.fluid} />
            </figure>
            <div className="grid-text">
              <div className="list">
                <h4>Details</h4>
                <ul>
                  <li><FaCalendarAlt/><strong>Date:</strong><span>&nbsp;September, 2019</span></li>
                  <li><FaTag/><strong>Category:</strong><span>&nbsp;Blog development / Design</span></li>
                  <li><FaSuitcase /><strong>Company:</strong><span>&nbsp;Xolo</span></li>
                </ul>
              </div>

              <div className="list">
                <h4>Work with Hubspot tool</h4>
                <ul>
                  <li><FaArrowRight/>Xolo's Blog</li>
                  <li><FaArrowRight/>Landing page Generator</li>
                  <li><FaArrowRight />Hubspot Emails</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-title">
            Showcase
          </div>
  
          <div className="grid">
            <figure className="grid-media">
                <Img fluid={data.pages.childImageSharp.fluid} />
            </figure>
            <div className="grid-text">
              <p className="heading-title">Xolo's Blog</p>
              <h3>Xolo's blog listing layout</h3>

              <Link to="https://blog.xolo.io" target="_blank" className="link-more">
                <span className="arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="arrow-label">Xolo's blog</span>
                  <span className="arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-left">
            <figure className="grid-media">
                <Img fluid={data.interactive.childImageSharp.fluid} />
            </figure>
            <div className="grid-text">
              <p className="heading-title">Landing page Generator</p>
              <h3>Custom made landing page generator for Xolo's marketing team.</h3>
              <Link to="https://lp.xolo.io/invoicing-solution-for-borderless-go" target="_blank" className="link-more"> 
                <span className="arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="arrow-label">Example LP made with this generator</span>
                  <span className="arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="grid">
            <figure className="grid-media">
                <Img fluid={data.navigation.childImageSharp.fluid} />
            </figure>
            <div className="grid-text">
              <p className="heading-title">Emails</p>
              <h3>Creating and managing Xolo's nurturing & newsletter email templates</h3>
              <Link to="https://viewstripo.email/template/b6bef831-650e-4ed6-92ca-b1880a89e4aa" className="link-more">
                <span className="arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="arrow-label">See example</span>
                  <span className="arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </Section>
    );
  };

  const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .section-title {
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .063em;
    font-size: 1rem;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--hr);
    color: #919191;
  }

  h4 {
    margin-bottom: 16px;
  }

  .about-wrapper {
    padding: 24px 0;

    @media (min-width: 768px) {
      padding: 24px 0 0;
    }

    p {
      opacity: .85;
    }
  }

  .grid {
    width: 100%;
    --mediaStart: 11;
    --mediaEnd: end;
    --textStart: wrapper-start;
    --textSpan: 7;
    --headingSpan: wrapper-end;
    --textStart: 1;
    
    @media (min-width: 768px) {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: [start] minmax(0, 1fr) [wrapper-start] repeat(16, minmax(0, 40px)) [wrapper-end] minmax(40px, 1fr) [end];
      margin: 0 auto;
      padding: 60px 0;
    }

    &-left {
      --mediaStart: start;
      --mediaEnd: 10;
      --textStart: 11;
    }

    &-media {
      position: relative;
      grid-column: var(--mediaStart, wrapper-start)/var(--mediaEnd, 10);
      grid-row: 1;
      line-height: 0;

      .platform-img {
        width: 100%;
        
        @media (min-width: 768px) {
          width: 350px;
        }
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    &-details {

      @media (min-width: 1440px) {
        --textSpan: 16;
      }

      @media (min-width: 1600px) {
        --textSpan: 20;
      }
    }

    &-text {
      display: flex;
      flex-direction: column;
      grid-column: var(--textStart, 11)/span var(--textSpan, 7);
      grid-row: 1;
      justify-content: center;
      padding: 24px 0;

      @media (min-width: 768px) {
        padding: 0;
      }
      

      p {
        margin-bottom: 20px;
      }

      .heading-title {
        color: var(--title);
        font-weight: 500;
      }

      h3 {
        font-size: 32px;
        line-height: 1.2;
        margin-bottom: 20px;
        font-weight: normal;
      }

      .list {
        &:last-child {
          margin-top: 24px;
        }

        ul {
          li {
            padding: 9px 0;
            display: flex;
            align-items: center;

            svg {
              margin-right: 10px;
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .link-back {
    margin-top: 100px;
    text-decoration: none;
    color: var(--text);
    display: flex;
    transition: .2s;

    &:hover {
      color: var(--textHover);
    }

    svg {
      align-self: center;
      margin-right: 10px;
      color: var(--primary);
    }
  }

  .link-more {
    display: inline-block;
    color: var(--title);
    font-size: 1em;
    font-weight: 500;
    font-style: italic;
    text-decoration: none;
    position: relative;
    transition: all 0.2s;
    margin: 0 0 20px;

    &:hover {
    color: var(--textHover);
    
      > .arrow.-left {
        > .shaft {
          width: 45px;
          transition-delay: 0.1s;
          background-color: var(--primary);

          &:before,
          &:after {
            width: 8px;
            transition-delay: 0.1s;
            background-color: var(--primary);
          }

          &:before {
            transform: rotate(40deg);
          }

          &:after {
            transform: rotate(-40deg);
          }
        }
      }
      
      > .main {
        transform: translateX(80px);
        
        > .arrow.-right {
          > .shaft {
            width: 0;
            transform: translateX(200%);
            transition-delay: 0;
            
            &:before,
            &:after {
              width: 0;
              transition-delay: 0;
              transition: all 0.1s;
            }

            &:before {
              transform: rotate(0);
            }

            &:after {
              transform: rotate(0);
            }
          }
        }
      }
    }

    .arrow {
      width: 45px;
      transition: all 0.2s;

      > .shaft {
        background-color: var(--primary);
        display: block;
        height: 1px;
        position: relative;
        transition: all 0.2s;
        transition-delay: 0;
        will-change: transform;

        &:after,
        &:before {
          background-color: var(--primary);
          content: "";
          display: block;
          height: 1px;
          position: absolute;
          top: 0;
          right: 0;
          transition: all 0.2s;
          transition-delay: 0;
        }

        &:before {
          transform-origin: top right;
        }

        &:after {
          transform-origin: bottom right;
        }
      }

      &.-left {
        position: absolute;
        top: 60%;
        left: 0;

        > .shaft {
          width: 0;
          background-color: var(--primary);
          
          &:before,
          &:after {
            width: 0;
            background-color: var(--primary);
          }

          &:before {
            transform: rotate(0);
          }

          &:after {
            transform: rotate(0);
          }
        }
      }

      &.-right {
        top: 3px;
        
        > .shaft {
          width: 45px;
          transition-delay: 0.2s;

          &:before,
          &:after { 
            width: 8px;
            transition-delay: 0.3s;
            transition: all 0.5s;
          }
          
          &:before {
            transform: rotate(40deg);
          }
          
          &:after {
            transform: rotate(-40deg);
          }
        }
      }
    }
    > .main {
        display: flex;
        align-items: center;
        transition: all 0.2s;
        
        > .arrow-label {
          margin: 0 16px 0 0;
        }
        
        > .arrow {
          position: relative;
        }
      }
  }
  
  .banner-wrapper {
    padding-top: 32px;
    width: 100%;

    .banner-img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default HubspotWork