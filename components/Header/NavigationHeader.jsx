'use client';
import React from 'react'

const NavigationHeader = ({sidebarState, setSidebarState}) => {

    const navMenuButtonRef = React.useRef();

    React.useLayoutEffect(() => {
        const navMenuBtn = navMenuButtonRef.current;
        const bsOffcanvas = new bootstrap.Offcanvas('#id-sidebar');
        
        navMenuBtn.addEventListener("mouseenter", (event) => {
            bsOffcanvas.show();
            console.log("mouse enter event", event);
        }, false);

        navMenuBtn.addEventListener("mouseleave", (event) => {
            bsOffcanvas.hide()
            console.log("mouse leave event", event);
        }, false);
    })

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li 
                            className={`nav-item ${ sidebarState ? 'd-block' : 'd-block'}`} 
                            ref={navMenuButtonRef}
                        >
                            <button 
                                className="nav-link" 
                                onClick={() => setSidebarState(!sidebarState)} 
                                id="id-nav-menu-icon" 
                                data-bs-toggle="offcanvas" 
                                href="#id-sidebar" 
                                role="button" 
                                aria-controls="id-sidebar">
                                <i className="fa-solid fa-bars fa-1x text-secondary"></i>
                            </button>
                        </li>

                        <li className="nav-item"> 
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-angle-left fa-1x text-secondary"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-angle-right fa-1x text-secondary"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-plus fa-1x text-secondary"></i>    
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="id-sidebar" data-bs-backdrop="false" aria-labelledby="offcanvasExampleLabel" style={{ top:100+'px' }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Floating Sidebar </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Hello, Zestgeek
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavigationHeader