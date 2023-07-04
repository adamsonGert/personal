import React from 'react';
import { Layout, Seo } from 'components';
import { About } from 'containers';

const AboutPage = () => {

  return (
    <>
      <Layout>
        <About />
      </Layout>
    </>
  );
};
  
export default AboutPage;

export const Head = () => (
  <Seo title="About | Gert" description="About Gert" />
)