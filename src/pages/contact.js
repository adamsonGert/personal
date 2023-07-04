import React from 'react';
import { Layout, Seo } from 'components';
import { Contact } from 'containers';

const ContactPage = () => (
    <>
        <Layout>
            <Contact />
        </Layout>
    </>
);
  
export default ContactPage;

  
export const Head = () => (
    <Seo title="Contact | Gert" description="Contact page" />
)