import React from "react"
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ReactWork = () => {
  const data = useStaticQuery(graphql`
  query {
      banner: file(relativePath: {eq: "portfolio/react/react-banner.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      platform: file(relativePath: {eq: "portfolio/react/react-platform.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      loginsignup: file(relativePath: {eq: "portfolio/react/gallery/login-signup-view.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dashboard: file(relativePath: {eq: "portfolio/react/gallery/dashboard-view.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      edit: file(relativePath: {eq: "portfolio/react/gallery/edit-profile-view.webp"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      todo: file(relativePath: {eq: "portfolio/react/gallery/todo-view.webp"}) {
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
      </div>
          
      <div className="banner-wrapper">
        <GatsbyImage
          className="banner-img"
          image={data.banner.childImageSharp.gatsbyImageData}
          alt="Image of React banner"
        />
      </div>
      
      <div className="about-wrapper animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
        <h4>About React & Firebase Authentication</h4>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for building user interfaces & Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to my app.
        </p>
      </div>
      
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage
            className="platform-img"
            image={data.platform.childImageSharp.gatsbyImageData}
            alt="Image of React platform"
          />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li><FaCalendarAlt/><span><strong>Date:</strong>&nbsp;August, 2022</span></li>
              <li><FaTag/><span><strong>Category:</strong>&nbsp;Authentication with realtime database project</span></li>
            </ul>
          </div>

          <div className="list">
            <h4>Purpose of this project</h4>
            <ul>
              <li><FaArrowRight/>Learn React framework</li>
              <li><FaArrowRight/>Learn how Firebase authentication and database integration works with CRUD options.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-title animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
        Showcase
      </div>

      <div className="grid text-start-5">
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.loginsignup.childImageSharp.gatsbyImageData} alt="Image of Login and Signup page"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Authentication page</p>
          <h3>Login & Signup page</h3>
          <a href="https://auth-production-4a4bc.web.app/login-signup" target="_blank" rel="noreferrer" className="link-more">
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
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.dashboard.childImageSharp.gatsbyImageData} alt="Image of Dashboard"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Dashboard</p>
          <h3>Dashboard view</h3>
          <p>Welcome screen with today's date and route buttons</p>
          <a href="https://auth-production-4a4bc.web.app/login-signup" target="_blank" rel="noreferrer" className="link-more">
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
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.edit.childImageSharp.gatsbyImageData} alt="Image of edit page"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Profile</p>
          <h3>Profile edit page</h3>
          <p>Ability to set/edit name, change email or password.</p>
          <a href="https://auth-production-4a4bc.web.app/login-signup" target="_blank" rel="noreferrer" className="link-more">
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
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.todo.childImageSharp.gatsbyImageData} alt="Image of ToDo page"/>
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">To-do</p>
          <h3>To-do Page</h3>
          <p>Classic create-read-edit-delete todo list.</p>
          <a href="https://auth-production-4a4bc.web.app/login-signup" target="_blank" rel="noreferrer" className="link-more">
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

export default ReactWork;