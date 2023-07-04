import React from "react"
import styled from "styled-components";
import { Link } from 'gatsby';

const Hero = () => {
  
  return (
        <Section id="hero">
          <div className="inner-wrapper">
            <Heading>
            <h1><span>Gert</span> Adamson</h1>
            <h2>Front-end Developer</h2>
              <Link to='/about' className='button'>
                <div className="line"></div> 
                <div className="line"></div>
                <div className="line"></div> 
                <div className="line"></div> 
                <div className="line"></div> 
                <div className="line"></div> 
                <span>Continue</span>
              </Link>
            </Heading>
          </div>
        </Section>
    );
  };

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = styled.div`
  max-width: 600px;
  
  @media (min-width: 768px) {
    flex: 3;
  }

    h1 {
      position: relative;
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 15px;
      color: var(--text);
      
      span {
        color: var(--title);
      }

      @media (min-width: 1024px) {
        font-size: 82px;  
      }
    }

    h2 {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text);
      margin-bottom: 30px;
    }

    .button {
      border: solid var(--button) 1px;
      width: 120px;
      height: 50px;
      position: absolute;
      background: transparent;
      cursor: pointer;
      transition: all 1s;

      &:hover {
        background: rgba(255,255,255, .03);
        
        .line {
          transform: scale(1);
          opacity: 0;
          transition: all 1s;

          &:nth-child(2),
          &:nth-child(5) {
            transition-delay: .5s;
          }

          &:nth-child(3),
          &:nth-child(6) {
            transition-delay: .9s;
          }
        }
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--buttonText);
      }

      .line {
        background: var(--buttonLine);
        position: absolute;
        transition: none;
        transform: scale(0);
        opacity: 1;

        &:nth-child(1) {
          transform-origin: 100% 100%;
          height: 1px;
          width: 20%;
          bottom: 0;
        }

        &:nth-child(2) {
          transform-origin: 100% 100%;
          height: 100%;
          width: 1px;
          bottom: 0;
          left: -1px;
        }

        &:nth-child(3) {
          transform-origin: 0 100%;
          height: 1px;
          width: 100%;
          top: -1px;
          left: -1px;
        }

        &:nth-child(4) {
          transform-origin: 0 100%;
          height: 1px;
          width: 20%;
          top: -1px;
          right: 0;
        }

        &:nth-child(5) {
          transform-origin: 100% 0;
          height: 100%;
          width: 1px;
          bottom: 0;
          right: -1px;
        }

        &:nth-child(6) {
          transform-origin: 100% 0;
          height: 1px;
          width: 100%;
          bottom: 0;
          right: -1px;
        }
      }
    }
`;

export default Hero