import React from 'react';
import styled from 'styled-components';
import { Navigation, Sidebar, Footer } from 'components';
import "themes/layout.css"

export default function Layout({ children }) {
  return (
    <>
        <Navigation />
        <Sidebar />
        <Main>{children}</Main>
        <Footer />
    </>
  )
}
  
  const Main = styled.div`
    margin: 0 auto;
    max-width: none;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

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