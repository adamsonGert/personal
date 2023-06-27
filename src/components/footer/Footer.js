import React from 'react';
import styled from "styled-components";

const Footer = () => {

  return (
    <FooterWrapper>
        <div>Designed & Built by Gert Adamson</div>
    </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 15px;
  text-align: center;

  div {
      color: var(--text);
      font-size: 12px;
    }
`

export default Footer;
