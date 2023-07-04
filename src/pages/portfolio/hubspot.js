import React from 'react';
import { Layout, Seo, HubspotWork } from 'components';

const Hubspot = () => (
    <>
        <Layout>
            <HubspotWork />
        </Layout>
    </>
);
  
export default Hubspot;

export const Head = () => (
    <Seo title="Hubspot | Gert" description="Hubspot portfolio page" />
)