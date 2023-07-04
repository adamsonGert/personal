import React from "react"
import { Layout, Seo } from 'components'
import styled from "styled-components";

const NotFoundPage = () => (
  <Layout>
    <Section>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h1 {
      font-size: 40px;
      font-weight: 700;

      @media (min-width: 1024px) {
        font-size: 82px;  
      }
    }
`;



export default NotFoundPage

export const Head = () => (
  <Seo title="404 not found | Gert" description="404 not found page" />
)
