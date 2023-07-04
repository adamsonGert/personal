import React from 'react';
import { Layout, Seo } from 'components';
import { Contact } from 'containers';

const ContactPage = () => (
    <>
        <Layout>
            <Seo title="Contact" />
            <Contact />
        </Layout>
    </>
);
  
  export default ContactPage;