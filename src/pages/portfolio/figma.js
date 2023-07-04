import React from 'react';
import { Layout, Seo, FigmaWork } from 'components';

const Figma = () => (
    <>
        <Layout>
            <FigmaWork />
        </Layout>
    </>
);
  
export default Figma;

export const Head = () => (
    <Seo title="Figma | Gert" description="Figma portfolio page" />
)