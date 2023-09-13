import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaArrowLeft, FaSuitcase, FaArrowRight } from 'react-icons/fa';
import { GatsbyImage } from "gatsby-plugin-image";

const VueWork = () => {
  const data = useStaticQuery(graphql`
  query {
      banner: file(relativePath: { eq: "portfolio/vue/vue-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      platform: file(relativePath: { eq: "portfolio/vue/vue-platform.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      create: file(relativePath: { eq: "portfolio/vue/gallery/create-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      edit: file(relativePath: { eq: "portfolio/vue/gallery/edit-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      list: file(relativePath: { eq: "portfolio/vue/gallery/list-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      form: file(relativePath: { eq: "portfolio/vue/gallery/form-info-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <PortfolioPageWrapper>
      <div className="nav-links">
        <Link to="/portfolio" className="link-back">
          <FaArrowLeft />Projects
        </Link>
        <Link to="/portfolio/vue/weather-app" className="link-forward">
          Vue Weather App<FaArrowRight />
        </Link>
      </div>

      <div className="banner-wrapper">
        <GatsbyImage image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Vue banner"/>
      </div>
      <div className="about-wrapper">
        <h4>About VueJS & Firebase Realtime Database</h4>
        <p>
          Vue is a progressive framework for building user interfaces & The Firebase Realtime Database is a cloud-hosted
          database.
        </p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Vue platform" />
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
                  <strong>Date:</strong>&nbsp;April, 2019
                </span>
              </li>
              <li>
                <FaTag />
                <span>
                  <strong>Category:</strong>&nbsp;Creative list with functions
                </span>
              </li>
              <li>
                <FaSuitcase />
                <span>
                  <strong>Company:</strong>&nbsp;NEXD
                </span>
              </li>
            </ul>
          </div>

          <div className="list">
            <h4>Purpose of this project</h4>
            <ul>
              <li>
                <FaArrowRight />
                Learn VueJS framework
              </li>
              <li>
                <FaArrowRight />
                Learn how Firebase database integration works
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-title animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">Showcase</div>

      <div className="grid text-start-5">
            <figure className="grid-media animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.create.childImageSharp.gatsbyImageData} alt="Image of Create list"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Create table</p>
              <h3>Create a new creative</h3>
              <a href="https://adamsongert.github.io/#/" target="_blank" rel="noreferrer" className="link-more">
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

          <div className="grid grid-left">
            <figure className="grid-media animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.list.childImageSharp.gatsbyImageData} alt="Image of Create list table view"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Table with data</p>
              <h3>Creative list table view</h3>
              <a href="https://adamsongert.github.io/#/" target="_blank" rel="noreferrer" className="link-more">
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

          <div className="grid text-start-5">
            <figure className="grid-media animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.edit.childImageSharp.gatsbyImageData} alt="Image of Table with edit functions"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Table with edit functions</p>
              <h3>Creative edit view</h3>
              <a href="https://adamsongert.github.io/#/" target="_blank" rel="noreferrer" className="link-more">
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

          <div className="grid grid-left">
            <figure className="grid-media animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.form.childImageSharp.gatsbyImageData} alt="Image of Table form information" />
            </figure>
            <div className="grid-text animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Table with form information</p>
              <h3>Creative form info</h3>
              <a href="https://adamsongert.github.io/#/" target="_blank" rel="noreferrer" className="link-more">
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
    </PortfolioPageWrapper>
  );
};

export default VueWork;