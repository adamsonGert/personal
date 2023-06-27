import React from "react"
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaTools, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FigmaWork = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: {eq: "portfolio/figma/figma-banner.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: {eq: "portfolio/figma/figma-platform.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pages: file(relativePath: {eq: "portfolio/figma/gallery/figma-pages.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    blog: file(relativePath: {eq: "portfolio/figma/gallery/figma-blog.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    banners: file(relativePath: {eq: "portfolio/figma/gallery/figma-banners.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    logos: file(relativePath: {eq: "portfolio/figma/gallery/figma-logo-ideas.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`)
  
  return (
    <PortfolioPageWrapper>
      <Link to='/portfolio' className="link-back"><FaArrowLeft />Projects</Link>
      <div className="banner-wrapper">
        <GatsbyImage className="banner-img" image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Figma banner" />
      </div>
      <div className="about-wrapper">
        <h4>About Figma</h4>
        <p>Figma is a web-based graphics editing and user interface design app. It can be used to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between.</p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
            <GatsbyImage className="platform-img" image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Figma platform" />
        </figure>
        <div className="grid-text">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li><FaCalendarAlt/><span><strong>Date:</strong>&nbsp;May 10th, 2019</span></li>
              <li><FaTag/><span><strong>Category:</strong>&nbsp;Design</span></li>
              <li><FaTools/><span><strong>Tool:</strong>&nbsp;Figma</span></li>
            </ul>
          </div>

          <div className="list">
            <h4>Working with Figma</h4>
            <ul>
              <li><FaArrowRight/>Website design</li>
              <li><FaArrowRight/>Marketing banners</li>
              <li><FaArrowRight />Wireframing</li>
              <li><FaArrowRight />Managing components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-title">
        Showcase
      </div>

      <div className="grid">
        <figure className="grid-media">
          <GatsbyImage image={data.pages.childImageSharp.gatsbyImageData} alt="Image of Figma pages" />
        </figure>
        <div className="grid-text">
          <p className="heading-title">Landing page design</p>
          <h3>A brexit themed landing page design made with Figma</h3>
        </div>
      </div>

      <div className="grid grid-left">
        <figure className="grid-media">
          <GatsbyImage image={data.blog.childImageSharp.gatsbyImageData} alt="Image of Figma blog" />
        </figure>
        <div className="grid-text">
          <p className="heading-title">Blog design</p>
          <h3>Listing page design for Xolo's Blog</h3>
          <a href="https://www.blog.xolo.io" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Xolo's blog</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="grid">
        <figure className="grid-media">
          <GatsbyImage image={data.banners.childImageSharp.gatsbyImageData} alt="Image of Figma banners" />
        </figure>
        <div className="grid-text">
          <p className="heading-title">Social media</p>
          <h3>Creating banners & social media post designs for Xolo Marketing team</h3>
          <a href="https://www.instagram.com/xolopreneur/" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Xolo's instagram</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-left">
        <figure className="grid-media">
          <GatsbyImage image={data.logos.childImageSharp.gatsbyImageData} alt="Image of Figma logos" />
        </figure>
        <div className="grid-text">
          <p className="heading-title">Logo Designs</p>
          <h3>Logo design's created with Figma & Illustrator</h3>
        </div>
      </div>
    </PortfolioPageWrapper>
  );
};

export default FigmaWork;