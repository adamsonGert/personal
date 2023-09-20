import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const WoocommerceWork = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "portfolio/woocommerce/woocommerce-banner.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: { eq: "portfolio/woocommerce/woocommerce-banner-small.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hero: file(relativePath: { eq: "portfolio/woocommerce/gallery/hero-block.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    services: file(relativePath: { eq: "portfolio/woocommerce/gallery/services-block.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    payment: file(relativePath: { eq: "portfolio/woocommerce/gallery/payment-block.webp" }) {
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
          <GatsbyImage className="banner-img" image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Next Banner" />
        </div>
        <div className="about-wrapper animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
          <h4>About Woocommerce</h4>
          <p>WooCommerce is a customizable e-commerce platform built for WordPress, enabling businesses to set up and run online stores.</p>
        </div>
        <div className="grid grid-left grid-details">
          <figure className="grid-media">
              <GatsbyImage className="platform-img" image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Next Platform"/>
          </figure>
          <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
            <div className="list">
              <h4>Details</h4>
              <ul>
                <li><FaCalendarAlt/><span><strong>Date:</strong>&nbsp;January 30th, 2023</span></li>
                <li><FaTag/><span><strong>Category:</strong>&nbsp;Web development/Design</span></li>
              </ul>
            </div>

            <div className="list">
              <h4>Purpose of this project</h4>
              <ul>
                <li><FaArrowRight/>Learn Woocommerce</li>
                <li><FaArrowRight />Learn how to maintain e-commerce store</li>
                <li><FaArrowRight/>Learn how to set up a wordpress site</li>
                <li><FaArrowRight />Learn payment solution integration</li>
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
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} alt="Image of Woocommerce's hero area" />
          </figure>
          <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
            <p className="heading-title">Consultancy & schooling</p>
            <h3>A consultancy & tutoring website for kindergarden teachers and parents</h3>

            <a href="https://kristiopetab.ee" target="_blank" rel="noreferrer" className="link-more">
              <span className="arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="arrow-label">Live demo</span>
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
              <GatsbyImage image={data.services.childImageSharp.gatsbyImageData} alt="Image of services"/>
          </figure>
          <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
            <p className="heading-title">Services</p>
            <h3>Display of services</h3>
            <a href="https://kristiopetab.ee/teenused" target="_blank" rel="noreferrer" className="link-more">
              <span className="arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="arrow-label">Live demo</span>
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
              <GatsbyImage image={data.payment.childImageSharp.gatsbyImageData} alt="Image of payment" />
          </figure>
          <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
            <p className="heading-title">Payment view</p>
            <h3>Payment section</h3>
            <p>User selects a payment method and completes the form to purchase the service.</p>
          </div>
        </div>
      </PortfolioPageWrapper>
    );
  };

export default WoocommerceWork