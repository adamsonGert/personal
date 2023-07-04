import React from 'react';
import { Layout, Seo, Hero } from 'components';
 
const IndexPage = () => (
  <>
    <Layout>
      <Hero />
    </Layout>
  </>
);

export default IndexPage;

export const Head = () => (
  <Seo title="Home | Gert" description="Gert's homepage" />
)