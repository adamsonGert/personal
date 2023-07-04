import React from 'react';
import { Layout, Seo } from 'components';
import { About } from 'containers';

const AboutPage = () => {

  return (
    <>
      <Layout>
        <Seo title="About" />
        <About />
      </Layout>
    </>
  );
};
  
export default AboutPage;