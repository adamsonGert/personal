import React from 'react';
import { Layout, Seo, VueWorkWeatherApp } from 'components';

const VueWeatherApp = () => (
    <>
        <Layout>
            <VueWorkWeatherApp />
        </Layout>
    </>
);
  
export default VueWeatherApp;

export const Head = () => (
    <Seo title="Vue Weather app | Gert" description="Vue's weather app project" />
)