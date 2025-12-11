import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../molecules/navigation/NavBar';
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div className="layout-wrapper"> {/* IMPORTANTE */}
            <Navbar />
            <main className="main-content"> {/*  IMPORTANTE */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;