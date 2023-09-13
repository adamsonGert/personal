import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby";
import { FaCalendarAlt, FaTag, FaTools, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GatsbyImage } from "gatsby-plugin-image";

const StorybookWork = () => {
  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "portfolio/storybook/story-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: { eq: "portfolio/storybook/storybook-platform.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    components: file(relativePath: { eq: "portfolio/storybook/gallery/storybook-component-list.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    modal: file(relativePath: { eq: "portfolio/storybook/gallery/modal-view.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    dashboard: file(relativePath: { eq: "portfolio/storybook/gallery/dashboard-view.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    other: file(relativePath: { eq: "portfolio/storybook/gallery/components-view.webp" }) {
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
        <GatsbyImage image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Storybook banner" />
      </div>
      <div className="about-wrapper animated-element" data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease">
        <h4>About Storybook</h4>
        <p>
          Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.
        </p>
      </div>
      <div className="grid grid-left grid-details">
        <figure className="grid-media">
          <GatsbyImage image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Storybook platform" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-up"
            data-sal-duration="800"
            data-sal-easing="ease">
          <div className="list">
            <h4>Details</h4>
            <ul>
              <li>
                <FaCalendarAlt />
                <strong>Date:</strong>
                <span>&nbsp;February, 2021</span>
              </li>
              <li>
                <FaTag />
                <strong>Category:</strong>
                <span>&nbsp;Development</span>
              </li>
              <li>
                <FaTools />
                <strong>Tool:</strong>
                <span>&nbsp;Storybook</span>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Working with Storybook</h4>
            <ul>
              <li>
                <FaArrowRight />
                Creating Components from Xolo's CSS
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
          <GatsbyImage image={data.components.childImageSharp.gatsbyImageData} alt="Image of component list" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Component list</p>
          <h3>List of Xolo's components in Storybook</h3>
        </div>
      </div>
      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.modal.childImageSharp.gatsbyImageData} alt="Image of modal component" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Modal component example</p>
          <h3>An example of a modal component that Xolo is using</h3>
        </div>
      </div>
      <div className="grid">
        <figure className="grid-media animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.dashboard.childImageSharp.gatsbyImageData} alt="Image of dashboard" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Chart component example</p>
          <h3>An example of a chart component that Xolo is using</h3>
        </div>
      </div>
      <div className="grid grid-left">
        <figure className="grid-media animated-element" data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease">
          <GatsbyImage image={data.other.childImageSharp.gatsbyImageData} alt="Image of other components" />
        </figure>
        <div className="grid-text animated-element" data-sal="slide-left"
            data-sal-duration="800"
            data-sal-easing="ease">
          <p className="heading-title">Other components</p>
          <h3>Some examples of the many other components that Xolo is using</h3>
        </div>
      </div>
    </PortfolioPageWrapper>
  );

};

export default StorybookWork;