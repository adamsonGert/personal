import React from "react";
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import ThemeToggleIcon from './themetoggleicon/ThemeToggleIcon';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
      <>
      <SidebarContainer>
        <div className="sidebarLeft">
          <ul>
            <li>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <ThemeToggleIcon
                    isDarkMode={theme === 'dark'}
                    onToggle={() =>
                      toggleTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  />
                )}
              </ThemeToggler>
            </li>
              <li>
                  <a href="https://github.com/adamsonGert" target="_blank" rel="noreferrer"><FaGithub aria-label="Github icon"/></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/gert-adamson-1b35b512b/" target="_blank" rel="noreferrer"><FaLinkedin aria-label="LinkedIn icon" /></a>
              </li>
              <li>
                  <a href="https://www.instagram.com/gerrtt/" target="_blank" rel="noreferrer"><FaInstagram aria-label="Instagram icon" /></a>
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
      padding-bottom: 25px;
  }

  .vertical-txt {
    position: relative;
    left: 2px;
    writing-mode: vertical-rl;
    cursor: pointer;
    transition: .2s;

    &:hover {
      color: var(--title);
    }
  }

  a {
    display: flex;
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