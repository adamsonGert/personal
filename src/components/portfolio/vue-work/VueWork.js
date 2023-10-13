import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
      login: file(relativePath: { eq: "portfolio/vue/gallery/login-page.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      booking: file(relativePath: { eq: "portfolio/vue/gallery/booking-component.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      viewBooking: file(relativePath: { eq: "portfolio/vue/gallery/view-booking-component.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      edit: file(relativePath: { eq: "portfolio/vue/gallery/edit-booking.webp" }) {
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
        <h4>About VueJS 3 & Firebase Realtime Database</h4>
        <p>
          Vue3 is a progressive framework for building user interfaces & The Firebase Realtime Database is a cloud-hosted
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
                  <strong>Date:</strong>&nbsp;October, 2023
                </span>
              </li>
              <li>
                <FaTag />
                <span>
                  <strong>Category:</strong>&nbsp;Booking system with CRUD functions 
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
                Use TailwindCSS
              </li>
              <li>
                <FaArrowRight />
                Learn Firebase data handling & authentication
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
              <GatsbyImage image={data.login.childImageSharp.gatsbyImageData} alt="Image of Create list"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Authentication</p>
              <h3>Log in or create a new account for access</h3>
              <a href="https://vue-bookify.netlify.app/" target="_blank" rel="noreferrer" className="link-more">
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
            <figure className="grid-media animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.booking.childImageSharp.gatsbyImageData} alt="Image of Create list table view"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Form</p>
              <h3>Booking form that sends data to Firebase</h3>
              <a href="https://vue-bookify.netlify.app/" target="_blank" rel="noreferrer" className="link-more">
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

          <div className="grid text-start-5">
            <figure className="grid-media animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.viewBooking.childImageSharp.gatsbyImageData} alt="Image of Table with edit functions"/>
            </figure>
            <div className="grid-text animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Bookings</p>
              <h3>Table layout of bookings</h3>
              <a href="https://vue-bookify.netlify.app/" target="_blank" rel="noreferrer" className="link-more">
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
            <figure className="grid-media animated-element" data-sal="slide-right" data-sal-duration="800" data-sal-easing="ease">
              <GatsbyImage image={data.edit.childImageSharp.gatsbyImageData} alt="Image of Table form information" />
            </figure>
            <div className="grid-text animated-element" data-sal="slide-left" data-sal-duration="800" data-sal-easing="ease">
              <p className="heading-title">Edit</p>
              <h3>Modal for editing existing bookings</h3>
              <a href="https://vue-bookify.netlify.app/" target="_blank" rel="noreferrer" className="link-more">
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
    </PortfolioPageWrapper>
  );
};

export default VueWork;