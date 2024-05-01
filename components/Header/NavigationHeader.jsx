'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTab, activateTab } from '../../utils/warehouseSlice';
import ContextMenu from '../ContextMenu';
import EditorTabContextMenuList from '../../config/editorTabContextMenu.json';


const NavigationHeader = ({sidebarState, setSidebarState}) => {
    const warehouse = useSelector((state) => state.warehouse);
    const dispatch = useDispatch();
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

    const handleAddNewTab = (event) => {
        event.preventDefault();
        // console.log("----------------- handleAddNewTab -----------------");
        dispatch(addNewTab({
            id: warehouse.navigationTabs[warehouse.navigationTabs.length -1].id + 1,
            title: `untitled - ${warehouse.navigationTabs[warehouse.navigationTabs.length -1].id + 1}`,
            isActive: false,
            order: warehouse.length
        }));
    }

    const handleActivateTab = (event, tabInfo) => {
        event.preventDefault();
        // console.log("----------------- handleAddNewTab -----------------", tabInfo);
        dispatch(activateTab({
            id: tabInfo.id
        }));
    }

    /** right click menu action on Editor Tab */ // FIXME: TODO: check for contextMenu supports
    const handleRightClick = (event) => {
		event.preventDefault();
		console.log("----- context menu :: opened --------")
		// setOpen(true);
		// setTop(window.scrollY + event.nativeEvent.clientY);
		// setLeft(event.nativeEvent.clientX);
		// console.log("positionOfContextMenu :: top: ", top, ', left: ', left);
	}

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

                        <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', width: "calc(100vw - 40vw)", gap: '5px' }}>
                        {
                            warehouse.navigationTabs.map((item, index) => {
                                return (
                                    <>
                                        <ContextMenu
                                            key={`id-context-${index}`}
                                            // menu={item}
                                            buttons={EditorTabContextMenuList}>
                                            <button 
                                                type="button" 
                                                className={`btn btn-outline-info ${ item.isActive ? 'btn-secondary' : 'btn-light' }`} 
                                                style={{
                                                    "--bs-btn-padding-y": ".25rem",
                                                    "--bs-btn-padding-x": "2rem",
                                                    "--bs-btn-font-size": ".75rem",
                                                    "--bs-btn-border-radius": "20px",
                                                }}
                                                key={`react-nav-tabs-${index}`} 
                                                onClick={(e) => handleActivateTab(e, item)}
                                                onContextMenu={handleRightClick}
                                                >
                                                { !(item.title) && <i className="fa-solid fa-file fa-1x text-secondary"></i> }
                                                { item?.title && item.title }
                                            </button>
                                        </ContextMenu>
                                    </>
                                )
                            })
                        }
                        </div>

                        <li className="nav-item">
                            <button className="nav-link" onClick={(e) => handleAddNewTab(e)} title={'open new editor tab!'}>
                                <i className="fa-solid fa-plus fa-1x text-secondary"></i>    
                            </button>
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