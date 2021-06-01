import React from 'react';
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <FooterArea>
      <SocialLinks>
        <ul>
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
      </SocialLinks>
      <FooterInfo>
        <div>Designed & Built by Gert Adamson</div>
      </FooterInfo>
    </FooterArea>
    )
}


const FooterArea = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`
const SocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 0 auto 10px;
    color: var(--text);

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        a {
          padding: 10px;
          color: inherit;

          &:hover {
            color: var(--title);
          }
        }
      }
    }
  }
`
const FooterInfo = styled.div`
  color: var(--text);
  font-size: 12px;
`

export default Footer;
