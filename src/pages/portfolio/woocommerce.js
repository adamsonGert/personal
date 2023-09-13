import React from 'react';
import { Layout, Seo, WoocommerceWork } from 'components';

const Next = () => (
    <>
        <Layout>
            <WoocommerceWork />
        </Layout>
    </>
);
  
export default Next;

export const Head = () => (
    <Seo title="Woocommerce | Gert" description="Woocommerce portfolio page" />
)