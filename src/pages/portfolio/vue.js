import React from 'react';
import { Layout, Seo, VueWork } from 'components';

const Vue = () => (
    <>
    <Layout>
      <VueWork />
    </Layout>
    </>
);
  
export default Vue;

export const Head = () => (
  <Seo title="Vue | Gert" description="Vue portfolio page" />
)