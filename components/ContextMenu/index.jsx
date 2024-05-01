'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleContextMenuBtnOnClick } from '../../utils/hooks';

const ContextMenu = ({ buttons, menu, children }) => {
	const [open, setOpen] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);
	
	const divRef = React.useRef(null);
	const contextRef = React.useRef(null);
    const warehouseStore = useSelector((state) => state.warehouse);
    const dispatch = useDispatch();

	const handleClickOutside = (e) => {
		if (!open) {
			return;
		}

		const root = divRef.current;
		console.log("==> root.contains :: ", root.contains)
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

	return (
		<div onContextMenu={handleRightClick} ref={divRef}>
			{children}

			{
				!open
					? null
					: <div
						className="context px-auto bg-light"
						ref={contextRef}
						style={{ top, left }}
					>
						<div class="list-group" style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start' }} >
							{
								buttons.length > 0 &&
								buttons.map((button) => {
									return <button 
										className={'list-group-item list-group-item-action shadow-lg'}
										key={`id-context-menu-btn-${button.label}`}
										style={{ display: "flex", flexDirection: "row", gap: "0.2rem" }}
										onContextMenu={e => e.stopPropagation()}
										onClick={(e) => handleContextMenuBtnOnClick(e, dispatch, menu, button)}
										>
										<span className={"d-flex justify-content-start align-items-center "}>
											<i className={button.icon}></i>
											<span className="mx-2">{button.label}</span>
										</span>
									</button>
								})
							}
						</div>
					</div>
			}
		</div>
	);
}
export default ContextMenu
