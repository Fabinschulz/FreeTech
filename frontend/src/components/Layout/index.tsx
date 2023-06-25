import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
