import React from 'react'
import {Routes, Route} from 'react-router-dom';

import SideBar from './components/Sidebar/SideBar';
import NavBar from './components/NavBar/NavBar';
import {routerLinks} from './utils/routerLinks';

export default function RoutePage() {

    return (
        <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex flex-1">
        <SideBar />
        <div id="main-container" className="flex-1">
            <Routes>
            {routerLinks.map(links => {
                if (links.path === '/overview' || links.path === '/') {
                return (
                    <Route key={links.id} index path={links.path} element={links.element} />
                );
                }
                return (
                <Route key={links.id} path={links.path} element={links.element} />
                );
            })}
            </Routes>
        </div>
        </div>
    </div>
    )
}
