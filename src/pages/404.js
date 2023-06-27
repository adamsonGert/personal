import React from "react"
import { Layout, Seo } from 'components'
import styled from "styled-components";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Section>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 80px 0 0;
  
  @media (min-width: 768px) {
    padding: 0;
    align-items: center;
  }
`;

export default NotFoundPage
