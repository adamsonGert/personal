import React from "react"
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaSuitcase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AasaWork = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "portfolio/aasa/aasa-banner.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    smallbanner: file(relativePath: {eq: "portfolio/aasa/aasa-banner-small.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pages: file(relativePath: {eq: "portfolio/aasa/gallery/aasa-pages.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    interactive: file(relativePath: {eq: "portfolio/aasa/gallery/loan-calculator.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    email: file(relativePath: {eq: "portfolio/aasa/gallery/newsletter.webp"}) {
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
        <GatsbyImage className="banner-img" image={data.banner.childImageSharp.gatsbyImageData} alt="Aasa Banner image" />
      </div>
      <div className="about-wrapper animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        <h4>About Aasa</h4>
        <p>Aasa Global is an international financial technology company established in 2011 which offers credit solutions to consumers and small-to medium sized businesses.</p>
        <p>Aasa operates in Estonia, Poland, Finland, Sweden, Chile and Indonesia, is constantly seeking for new business opportunities by developing new innovative financing solutionsand looking for expansion to markets with high growth-potential.</p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage className="platform-img" image={data.smallbanner.childImageSharp.gatsbyImageData} alt="Aasa platform image" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li><FaCalendarAlt/><span><strong>Date:</strong>&nbsp;2017-2019</span></li>
              <li><FaTag/><span><strong>Category:</strong>&nbsp;Web development/Design</span></li>
              <li><FaSuitcase/><span><strong>Company:</strong>&nbsp;Aasa Global</span></li>
            </ul>
          </div>

          <div className="list">
            <h4>Work in Aasa</h4>
            <ul>
              <li><FaArrowRight/>Website and Blog development</li>
              <li><FaArrowRight/>Promote usability best practices</li>
              <li><FaArrowRight/>SEO & Dev team collaboration</li>
              <li><FaArrowRight/>CRM usage</li>
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
          <GatsbyImage image={data.pages.childImageSharp.gatsbyImageData} alt="Image of pages" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Pages</p>
          <h3>Working on Aasa's Finnish & Swedish sites</h3>

          <a href="https://www.aasa.fi" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Aasa.fi</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
          <a href="https://www.aasakredit.se" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Aasakredit.se</span>
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
          <GatsbyImage image={data.interactive.childImageSharp.gatsbyImageData} alt="Image of calculator"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Interactive</p>
          <h3>A loan calculator that calculates loan period, monthly installment or loan amount.</h3>
          <a href="https://www.aasa.fi/lainalaskuri" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See live demo</span>
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
          <GatsbyImage image={data.email.childImageSharp.gatsbyImageData} alt="Image of Aasa's newsletter"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Email templates</p>
          <h3>Creating & Managing Aasa's newsletter's</h3>
        </div>
      </div>
    </PortfolioPageWrapper>
  );
};

export default AasaWork;