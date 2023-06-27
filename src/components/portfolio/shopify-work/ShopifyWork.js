import React from "react";
import PortfolioPageWrapper from "../portfolioPage";
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaSuitcase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GatsbyImage } from "gatsby-plugin-image";

const ShopifyWork = () => {
  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "portfolio/shopify/shopify-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: { eq: "portfolio/shopify/shopify-platform.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    list: file(relativePath: { eq: "portfolio/shopify/gallery/balinest-homepage.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    edit: file(relativePath: { eq: "portfolio/shopify/gallery/products-view.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`);

  return (
    <PortfolioPageWrapper>
      <Link to="/portfolio" className="link-back">
        <FaArrowLeft />Projects
      </Link>
      <div className="banner-wrapper">
        <GatsbyImage image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Shopify banner" />
      </div>
      <div className="about-wrapper">
        <h4>About Shopify & Balinest e-commerce website</h4>
        <p>
          Shopify is a leading eCommerce platform that allows you to create an online shopping website that integrates with social networking, post products, cart and payment features, order processing. This platform offers all of the business tools you need in one, familiar place.
        </p>
        <p>Bali.Nest is a small Estonian-based business that sells different home decor products.</p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Shopify platform" />
        </figure>
        <div className="grid-text">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li>
                <FaCalendarAlt />
                <span>
                  <strong>Date:</strong>&nbsp;June, 2021
                </span>
              </li>
              <li>
                <FaTag />
                <span>
                  <strong>Category:</strong>&nbsp;E-commerce
                </span>
              </li>
              <li>
                <FaSuitcase />
                <span>
                  <strong>Company:</strong>&nbsp;Balinest
                </span>
              </li>
            </ul>
          </div>

          <div className="list">
            <h4>Purpose of this project</h4>
            <ul>
              <li>
                <FaArrowRight />Get to know Shopify platform
              </li>
              <li>
                <FaArrowRight />Learn how to use & integrate different payment methods
              </li>
              <li>
                <FaArrowRight />Use different shipping & packaging methods
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-title">Showcase</div>

      <div className="grid text-start-5">
        <figure className="grid-media">
          <GatsbyImage image={data.list.childImageSharp.gatsbyImageData} alt="Image of Balinest homepage" />
        </figure>
        <div className="grid-text">
          <p className="heading-title">Homepage</p>
          <h3>Balinest homepage</h3>
          <a href="https://web.archive.org/web/20211215182939/https://balinest.eu/" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See archived demo</span>
              <span className="arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-left">
        <figure className="grid-media">
          <GatsbyImage image={data.edit.childImageSharp.gatsbyImageData} alt="Image of Balinest products view"/>
        </figure>
        <div className="grid-text">
          <p className="heading-title">Products view</p>
          <h3>Example of different products in Furniture category</h3>
          <a href="https://web.archive.org/web/20211130123713/https://balinest.eu/collections/home-decor" target="_blank" rel="noreferrer" className="link-more">
            <span className="arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <span className="arrow-label">See archived demo</span>
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

export default ShopifyWork;