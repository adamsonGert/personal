import React from 'react';
import { Layout, Seo, ShopifyWork } from 'components';

const Shopify = () => (
    <>
        <Layout>
            <ShopifyWork />
        </Layout>
    </>
);
  
  export default Shopify;

export const Head = () => (
    <Seo title="Shopify | Gert" description="Shopify portfolio page" />
)