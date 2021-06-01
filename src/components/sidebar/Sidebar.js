import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { Tooltips } from 'components';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {

  const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
  const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  if (typeof window !== "undefined") {
    const animate = () => {
      const loader = anime.timeline({
      duration : 350,
      easing: 'easeOutQuad'
    });

      loader
        .add({
          targets:".moon",
          d:[{value: theme === 'dark' ? moonPath : sunPath}] 
        })
        .add({
          targets:'#theme-icon',
          rotate : theme === 'dark' ? 320 : 0
        },"-=150")
    };

    animate();
  }

  return (
      <>
      <SidebarContainer>
        <div className="sidebarLeft">
          <ul>
              <li>
                <Button onClick={ThemeToggle} >
                  <Tooltips content={theme === "light" ? 'Night Mode' : 'Day Mode'} direction="right">
                    <svg id="theme-icon" width="20" height="20" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
                      <path className="moon" d={theme === 'light' ? sunPath : moonPath} fill={theme === "light" ? 'black' : 'white'}/>
                    </svg>
                  </Tooltips>
                </Button>
              </li>
              <li>
                  <a href="https://github.com/adamsonGert"><FaGithub aria-label="Github icon"/></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/gert-adamson-1b35b512b/"><FaLinkedin aria-label="LinkedIn icon" /></a>
              </li>
              <li>
                  <a href="https://www.instagram.com/gerrtt/"><FaInstagram aria-label="Instagram icon" /></a>
              </li>
            </ul>
          </div>
      
          <div className="sidebarRight">
            <ul>
              <li className="vertical-txt">
                  gert_adamson@hotmail.com
              </li>
            </ul>
          </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }

  .sidebarLeft {
    left: 100px;
    right: 40px;
    width: 40px;
    position: fixed;
    bottom: 0;
    z-index: 10;
    font-size: 20px;

    @media (min-width: 767px) {
      left: 50px;
    }

    @media (min-width: 1024px) {
      left: 150px;
    }

    @media (min-width: 1440px) {
      left: 150px;
    }


    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background: #a8b2d1;
    }
  }

  .sidebarRight {
    right: 100px;
    width: 40px;
    position: fixed;
    bottom: 0;
    z-index: 10;

    @media (min-width: 767px) {
      right: 50px;
    }

    @media (min-width: 1024px) {
      right: 150px;
    }

    @media (min-width: 1440px) {
      right: 150px;
    }


    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background: #61747D;
    }
  }
  
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
      padding: 10px;
  }

  .vertical-txt {
    writing-mode: vertical-rl;
    cursor: pointer;
    transition: .2s;

    &:hover {
      color: var(--title);
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
    cursor: pointer;
    transition: .2s;

    &:hover {
      color: var(--title);
    }
  }
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    svg {
      font-size: 20px;

      path {
        transition: .2s;
      }
    }

    svg path:hover {
      fill: var(--title);
    }
`;


