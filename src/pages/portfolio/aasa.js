import React from 'react';
import {Layout, Seo, AasaWork } from 'components';

const Aasa = () => (
    <>
        <Layout>
            <AasaWork />
        </Layout>
    </>
);
  
export default Aasa;

export const Head = () => (
    <Seo title="Aasa | Gert" description="Aasa portfolio page" />
)