import React from "react";
import PortfolioPageWrapper from '../portfolioPage';
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextWork = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "portfolio/next/next-banner.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    platform: file(relativePath: { eq: "portfolio/next/next-banner-small.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hero: file(relativePath: { eq: "portfolio/next/gallery/hero-block.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    allposts: file(relativePath: { eq: "portfolio/next/gallery/all-posts-block.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    post: file(relativePath: { eq: "portfolio/next/gallery/post-block.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    search: file(relativePath: { eq: "portfolio/next/gallery/search-block.webp" }) {
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
          <GatsbyImage className="banner-img" image={data.banner.childImageSharp.gatsbyImageData} alt="Image of Next Banner" data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease" />
        </div>
        <div className="about-wrapper" data-sal="slide-down"
            data-sal-duration="1000"
            data-sal-easing="ease">
          <h4>About NextJS</h4>
          <p>The React Framework for the Web which enables to create full-stack Web applications by extending the latest React features</p>
        </div>
        <div className="grid grid-left grid-details">
          <figure className="grid-media" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
              <GatsbyImage className="platform-img" image={data.platform.childImageSharp.gatsbyImageData} alt="Image of Next Platform"/>
          </figure>
          <div className="grid-text" data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease">
            <div className="list">
              <h4>Details</h4>
              <ul>
                <li><FaCalendarAlt/><span><strong>Date:</strong>&nbsp;February 13th, 2023</span></li>
                <li><FaTag/><span><strong>Category:</strong>&nbsp;Web development/Design</span></li>
              </ul>
            </div>

            <div className="list">
              <h4>Purpose of this project</h4>
              <ul>
                <li><FaArrowRight/>Learn basics of NextJS</li>
                <li><FaArrowRight />Learn React hooks for fetching the blog data</li>
                <li><FaArrowRight/>Learn how to deploy using Vercel</li>
                <li><FaArrowRight />Learn TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-title" data-sal="slide-down"
            data-sal-duration="1000"
            data-sal-easing="ease">
          Showcase
        </div>

        <div className="grid">
          <figure className="grid-media" data-sal="slide-left" data-sal-mobile="none"
            data-sal-duration="1000"
            data-sal-easing="ease">
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} alt="Image of Blog's hero area" />
          </figure>
          <div className="grid-text" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
            <p className="heading-title">Botany</p>
            <h3>A blog called "Botany" that is built with NextJS</h3>

            <a href="https://blog-nextjs-adamsongert.vercel.app/" target="_blank" rel="noreferrer" className="link-more">
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
          <figure className="grid-media" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
              <GatsbyImage image={data.allposts.childImageSharp.gatsbyImageData} alt="Image of blog posts"/>
          </figure>
          <div className="grid-text" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
            <p className="heading-title">Blog posts</p>
            <h3>Display of blog posts using React hooks</h3>
            <a href="https://blog-nextjs-adamsongert.vercel.app/" target="_blank" rel="noreferrer" className="link-more">
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
          <figure className="grid-media" data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease">
              <GatsbyImage image={data.post.childImageSharp.gatsbyImageData} alt="Image of blog post" />
          </figure>
          <div className="grid-text" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
            <p className="heading-title">Blog post</p>
            <h3>Blog post view that was fetched using Next.js App Router</h3>
            <a href="https://blog-nextjs-adamsongert.vercel.app/posts/1" target="_blank" rel="noreferrer" className="link-more">
              <span className="arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="arrow-label">See more</span>
                <span className="arrow -right">
                  <span className="shaft"></span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-left">
          <figure className="grid-media" data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="ease">
              <GatsbyImage image={data.search.childImageSharp.gatsbyImageData} alt="Image of search feature"/>
          </figure>
          <div className="grid-text" data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease">
            <p className="heading-title">Search</p>
            <h3>A search feature for finding blog posts</h3>
            <a href="https://blog-nextjs-adamsongert.vercel.app/results?query=plant" target="_blank" rel="noreferrer" className="link-more">
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

export default NextWork