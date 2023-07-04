import React from 'react';
import { Layout, Seo, Portfolio } from 'components';

const PortfolioPage = () => (
    <>
        <Layout>
            <Portfolio />
        </Layout>
    </>
);
    
export default PortfolioPage;

export const Head = () => (
    <Seo title="Portfolio | Gert" description="Portfolio listing page" />
)