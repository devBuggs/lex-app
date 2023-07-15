import React, { useState, useEffect } from 'react';

const ContextMenu = ({ buttons, menu, children }) => {
	const [open, setOpen] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);
	
	const divRef = React.useRef(null);
	const contextRef = React.useRef(null);

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

	const handleRightClick = (e) => {
		e.preventDefault();
		setOpen(true);
		setTop(window.scrollY + e.nativeEvent.clientY);
		setLeft(e.nativeEvent.clientX);
		console.log("top: ", top, ', left: ', left);
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
						<ul >
							{
								buttons.length > 0 &&
								buttons.map((button) => {
									return <li key={`id-context-menu-btn-${button.label}`}>
										<a href="#" onClick={() => alert(`${button.label} ${menu.name}`)}>
										<i className={button.icon}></i> {button.label}
										</a>
									</li>
								})
							}
						</ul>
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