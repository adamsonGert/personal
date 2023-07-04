import React from 'react';
import { Layout, Seo, XoloWork } from 'components';

const Xolo = () => (
    <>
        <Layout>
            <XoloWork />
        </Layout>
    </>
);
  
export default Xolo;

export const Head = () => (
    <Seo title="Xolo | Gert" description="Xolo portfolio page" />
)