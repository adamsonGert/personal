import React from 'react';
import { Layout, Seo, Portfolio } from 'components';

const PortfolioPage = () => (
    <>
        <Layout>
            <Seo title="Portfolio" />
            <Portfolio />
        </Layout>
    </>
);
  
  export default PortfolioPage;