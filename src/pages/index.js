import React from 'react';
import { Layout, Seo, Hero } from 'components';
 
const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" description="A Front-End developer based in Estonia" />
      <Hero />
    </Layout>
  </>
);

export default IndexPage;