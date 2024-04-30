'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../utils/warehouseSlice';

const ContextMenu = ({ buttons, menu, children }) => {
	const [open, setOpen] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);
	
	const divRef = React.useRef(null);
	const contextRef = React.useRef(null);
    const warehouseStore = useSelector((state) => state.warehouse.value);
    const dispatch = useDispatch();

	const handleClickOutside = (e) => {
		if (!open) {
			return;
		}

		const root = divRef.current;
		const context = contextRef.current;
		const isInRow = (!root.contains(e.target) || root.contains(e.target));
		const isInContext = !context.contains(e.target);

		if (isInRow && isInContext) {
			setOpen(false);
		}
	}

	const handleRightClickOutside = (e) => {
		if (!open) {
			return;
		}

		const root = divRef.current;
		const isInRow = !root.contains(e.target);

		if (isInRow) {
			setOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', (e) => handleClickOutside(e));
		document.addEventListener('contextmenu', (e) => handleRightClickOutside(e));
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('contextmenu', handleRightClickOutside);
		};
	});

	const handleRightClick = (event) => {
		event.preventDefault();
		console.log("----- context menu :: opened --------")
		setOpen(true);
		setTop(window.scrollY + event.nativeEvent.clientY);
		setLeft(event.nativeEvent.clientX);
		console.log("positionOfContextMenu :: top: ", top, ', left: ', left);
	}

	const handleContextButtonClick = (event, menuObj, ctxObj) => {
		event.preventDefault();
		console.log("----- context menu :: menuBtn :: onClick --------")
		alert(`${ctxObj.label} ${menuObj.name}`);
		dispatch(increment())
	}

	return (
		<div onContextMenu={handleRightClick} ref={divRef}>
			{children}

			{
				!open
					? null
					: <div
						className="context"
						ref={contextRef}
						style={{ top, left }}
					>
						<div style={{ listStyle: "none", paddingLeft: "5px", display: "flex", flexDirection: "column", justifyContent: 'flex-start' }} >
							{
								buttons.length > 0 &&
								buttons.map((button) => {
									return <>
										{/* <p key={`id-context-menu-btn-${button.label}`} style={{ display: "flex", flexDirection: "column" }}>
											<a className='btn-sm' href="#" onClick={(e) => handleContextButtonClick(e, menu, button)}>
												<i className={button.icon}></i>
											</a>
										</p> */}
										<button 
											style={{ display: "flex", flexDirection: "row", gap: "5px" }}
											onClick={(e) => handleContextButtonClick(e, menu, button)} >
											<span className={'min-w-24'}>
												<i className={button.icon}></i>
											</span>
											<span className="mx-2 max-w-24">{button.label}</span>
										</button>
									</>
								})
							}
						</div>
					</div>
			}
		</div>
	);
}
export default ContextMenu

const theme = {
	context: {
		width: 200 + 'px',
		height: 'auto',
		backgroundColor: '#ffffff',
		display: 'block',
		position: 'absolute',
		border: '1px solid #ccc',
		boxShadow: '2px 2px 2px #343434'
	}
}