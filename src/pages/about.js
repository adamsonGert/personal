import React from 'react';
import { Seo } from 'components';
import { About } from 'containers';

const AboutPage = () => {

  return (
    <>
      <Seo title="About" />
      <About />
    </>
  );
};
  
export default AboutPage;