import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';


function GridLayout() {
    return (
     
        <>

                
                <div className="grid grid-cols-2 gap-4 p-4 mt-16 mb-8">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 4</div>
                    <div className="card">Card 5</div>
                    <div className="card">Card 6</div>
                </div>
            
        </>

    );
}

export default GridLayout;

{/* <RouterProvider router={router} /> */}