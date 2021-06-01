import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navigation, Sidebar, Footer } from 'components';
import { GlobalStyle } from 'themes';

const Layout = ({ children }) => {

  return (
    <>
        <Navigation />
        <Sidebar />
        <Main className="container">{children}</Main>
        <Footer />
        <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.div`
    margin: 0 auto;
    max-width: none;
    min-height: 100vh;
    padding: 0 20px;
    display: flex;

    @media (min-width: 1024px) {
      max-width: 800px;
    }

    @media (min-width: 1400px) {
      max-width: 1000px;
    }

    @media (min-width: 1600px) {
      max-width: 1200px;
    }
`;

export default Layout;
