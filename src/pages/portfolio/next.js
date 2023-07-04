import React from 'react';
import { Layout, Seo, NextWork } from 'components';

const Next = () => (
    <>
        <Layout>
            <NextWork />
        </Layout>
    </>
);
  
export default Next;

export const Head = () => (
    <Seo title="Next | Gert" description="Next portfolio page" />
)