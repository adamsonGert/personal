import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaSuitcase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GatsbyImage } from "gatsby-plugin-image";

const XoloWork = () => {
  const data = useStaticQuery(graphql`
  query {
      banner: file(relativePath: {eq: "portfolio/xolo/xolo-banner.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      platform: file(relativePath: {eq: "portfolio/xolo/xolo-platform.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      pages: file(relativePath: {eq: "portfolio/xolo/gallery/xolo-pages.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      interactive: file(relativePath: {eq: "portfolio/xolo/gallery/interactive-block.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      pricing: file(relativePath: {eq: "portfolio/xolo/gallery/pricing-block.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      hero: file(relativePath: {eq: "portfolio/xolo/gallery/hero-block.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <PortfolioPageWrapper>
      <Link to='/portfolio' className="link-back">
        <FaArrowLeft />Projects
      </Link>
      <div className="banner-wrapper">
        <GatsbyImage image={data.banner.childImageSharp.gatsbyImageData} className="banner-img" alt="Image of Xolo banner" />
      </div>
      <div className="about-wrapper animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        <h4>About Xolo</h4>
        <p>
          Xolo is an all-in-one SaaS platform for solopreneurs, bringing together banking, company formation, accounting,
          and compliance. Xolo helps you manage your independent business from anywhere, with access to secure banking,
          accounting, and one of the simplest tax systems in the world.
        </p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage image={data.platform.childImageSharp.gatsbyImageData} className="platform-img" alt="Image of Xolo platform" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li>
                <FaCalendarAlt />
                <span>
                  <strong>Date:</strong>&nbsp;May 10th, 2019
                </span>
              </li>
              <li>
                <FaTag />
                <span>
                  <strong>Category:</strong>&nbsp;Web development/Design
                </span>
              </li>
              <li>
                <FaSuitcase />
                <span>
                  <strong>Company:</strong>&nbsp;Xolo
                </span>
              </li>
            </ul>
          </div>
  
          <div className="list">
            <h4>Work in Xolo</h4>
            <ul>
              <li>
                <FaArrowRight />
                Website, Blog & Product development
              </li>
              <li>
                <FaArrowRight />
                Promote usability best practices
              </li>
              <li>
                <FaArrowRight />
                Growth & Marketing team collaboration
              </li>
              <li>
                <FaArrowRight />
                Code reviews & Sprints
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="section-title animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        Showcase
      </div>
  
      <div className="grid">
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.pages.childImageSharp.gatsbyImageData} alt="Image of re-branded pages" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Re-branding</p>
          <h3>Before & After versions of Xolo's homepage.</h3>
  
          <a href="https://www.xolo.io" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Home</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.interactive.childImageSharp.gatsbyImageData} alt="Image of interactive component blocks" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Blocks</p>
          <h3>Interactive component blocks</h3>
          <a href="https://web.archive.org/web/20200704055206/https://www.xolo.io/" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See demo</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="grid">
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.pricing.childImageSharp.gatsbyImageData} alt="Image of pricing component" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Pricing</p>
          <h3>Fully responsive pricing page component that can be re-used in multiple pages</h3>
          <a href="https://www.xolo.io/zz-en/pricing" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Explore</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} alt="Image of hero block" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Blocks</p>
          <h3>Hero area</h3>
          <a href="https://www.xolo.io/zz-en/go" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See demo</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </PortfolioPageWrapper>
  );
};

export default XoloWork;