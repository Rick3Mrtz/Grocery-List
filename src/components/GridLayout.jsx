import React from 'react';
import { useNavigate, createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import SideNav from './SideNav';
import BottomNav from './BottomNav';
import Nav from './Nav';

function GridLayout({ savedLists, setShowSideNav }) {

    const navigate = useNavigate();
    function gridClick() {
        navigate('/grid')
    }

    

    console.log('GridLayout - savedLists:', savedLists);

    return (
        <>
        <Nav />
        {/* <SideNav /> */}
                
                <div className="grid grid-cols-2 gap-4 p-4 mt-16 mb-8">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 4</div>
                    <div className="card">Card 5</div>
                    <div className="card">Card 6</div>
                </div>
            <BottomNav />
        </>
    );
}

export default GridLayout;