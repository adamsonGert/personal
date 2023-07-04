import React from 'react';
import { Layout, Seo, VueWorkWeatherApp } from 'components';

const VueWeatherApp = () => (
    <>
        <Layout>
            <Seo title="Vue Weather App" />
            <VueWorkWeatherApp />
        </Layout>
    </>
);
  
  export default VueWeatherApp;