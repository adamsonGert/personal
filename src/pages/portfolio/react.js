import React from 'react';
import { Layout, Seo, ReactWork } from 'components';

const TheReact = () => (
    <>
        <Layout>
            <ReactWork />
        </Layout>
    </>
);
  
  export default TheReact;

  export const Head = () => (
    <Seo title="React | Gert" description="React portfolio page" />
)