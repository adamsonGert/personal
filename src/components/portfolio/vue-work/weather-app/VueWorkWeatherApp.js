import React from "react";
import PortfolioPageWrapper from '../../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GatsbyImage } from "gatsby-plugin-image";

const VueWorkWeatherApp = () => {
  const data = useStaticQuery(graphql`
  query {
      banner: file(relativePath: { eq: "portfolio/vue/weather-app/weather-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      platform: file(relativePath: { eq: "portfolio/vue/weather-app/vue-platform-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      search: file(relativePath: { eq: "portfolio/vue/weather-app/gallery/search-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      day: file(relativePath: { eq: "portfolio/vue/weather-app/gallery/day-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      night: file(relativePath: { eq: "portfolio/vue/weather-app/gallery/night-view.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <PortfolioPageWrapper>
      <Link to="/portfolio/vue" className="link-back">
        <FaArrowLeft />Vue
      </Link>

      <div className="banner-wrapper">
        <GatsbyImage image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Vue banner" />
      </div>
      <div className="about-wrapper animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
        <h4>Weather Application</h4>
        <p>Weather app that is fetching Data from API and created with Vue.</p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Vue platform"/>
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
                  <strong>Date:</strong>&nbsp;June, 2021
                </span>
              </li>
              <li>
                <FaTag />
                <span>
                  <strong>Category:</strong>&nbsp;Weather app
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
                Learn API integration
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-title animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease" >Showcase</div>

      <div className="grid text-start-5">
        <figure className="grid-media animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
          <GatsbyImage image={data.search.childImageSharp.gatsbyImageData} alt="Image of weather app home" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
          <p className="heading-title">Homepage</p>
          <h3>Search your City</h3>
        </div>
      </div>

      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
          <GatsbyImage image={data.day.childImageSharp.gatsbyImageData} alt="Image of weather location Tallinn" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
          <p className="heading-title">Weather location Tallinn</p>
          <h3>Tallinn weather data</h3>
        </div>
      </div>

      <div className="grid text-start-5">
        <figure className="grid-media animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
          <GatsbyImage image={data.night.childImageSharp.gatsbyImageData} alt="Image of weather location Honolulu"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
          <p className="heading-title">Weather location Honolulu</p>
          <h3>Honolulu weather data</h3>
        </div>
      </div>
    </PortfolioPageWrapper>
  );
};

export default VueWorkWeatherApp;