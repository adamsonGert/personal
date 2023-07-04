import React from 'react';
import { Layout, Seo, StorybookWork } from 'components';

const Storybook = () => (
    <>
        <Layout>
            <StorybookWork />
        </Layout>
    </>
);
  
export default Storybook;

export const Head = () => (
    <Seo title="Storybook | Gert" description="Storybook portfolio page" />
)