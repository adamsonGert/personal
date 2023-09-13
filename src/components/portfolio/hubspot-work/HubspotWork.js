import React from "react"
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaSuitcase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HubspotWork = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: {eq: "portfolio/hubspot/hubspot-banner.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: {eq: "portfolio/hubspot/hubspot-platform.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pages: file(relativePath: {eq: "portfolio/hubspot/gallery/xolo-blog.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    generator: file(relativePath: {eq: "portfolio/hubspot/gallery/lp-generator.webp"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    emails: file(relativePath: {eq: "portfolio/hubspot/gallery/hubspot-email.webp"}) {
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
        <GatsbyImage className="banner-img" image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Hubspot banner" />
      </div>
      <div className="about-wrapper animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        <h4>About Hubspot</h4>
        <p>HubSpot is an inbound marketing and sales platform that helps Xolo to attract visitors, convert leads and close customers. This includes content creation, social media sharing, workflow automation, lead capture, customer relationship management, sales pipeline mapping and performance tracking.</p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage className="platform-img" image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Hubspot platform" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
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

      <div className="section-title animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        Showcase
      </div>

      <div className="grid">
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.pages.childImageSharp.gatsbyImageData} alt="Image of Xolo's blog" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Xolo's Blog</p>
          <h3>Xolo's blog listing layout</h3>

          <a href="https://blog.xolo.io" target="_blank" rel="noreferrer" className="link-more">
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
      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.generator.childImageSharp.gatsbyImageData} alt="Image of landing page generator" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Landing page Generator</p>
          <h3>Custom made landing page generator for Xolo's marketing team.</h3>
          <a href="https://lp.xolo.io/pt/xolo-go-pt" target="_blank" rel="noreferrer" className="link-more"> 
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">Example LP made with this generator</span>
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
          <GatsbyImage image={data.emails.childImageSharp.gatsbyImageData} alt="Image of emails" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Emails</p>
          <h3>Creating and managing Xolo's nurturing & newsletter email templates</h3>
          <a href="https://viewstripo.email/template/b6bef831-650e-4ed6-92ca-b1880a89e4aa" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See example</span>
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

export default HubspotWork;