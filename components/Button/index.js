'use client';
import React from 'react'
import ContextMenu from '../ContextMenu';
import ContextMenuList from '../../config/contextMenu.json';

const index = ({ obj }) => {
	const [expended, setExpended] = React.useState(obj.state || false) // TODO: FIXME: verify object attribute

	return (
		<>
			<div className={`ms-3 ${obj.state ? 'fw-bold text-dark' : 'text-secondary'}`} style={{ fontSize: 14 + 'px' }}>
				<p className={`mb-1`}>
					<ContextMenu
						key={`id-context-${index}`}
						menu={obj}
						buttons={ContextMenuList}>
						<a className={{}} data-bs-toggle="collapse" href={`#id-collapseChild-${obj.id}`} role="button" aria-expanded="false" aria-controls={`id-collapseChild-${obj.id}`} onClick={() => setExpended(!expended)}>
							{expended ? <i className="fa-solid fa-angle-down fs-2x me-2"></i> : <i className="fa-solid fa-angle-right fs-2x me-2"></i>}
						</a>

						<i className="fa-regular fa-file-lines fs-2x me-2"></i> {obj.name}
					</ContextMenu>
				</p>

				<ul className="collapse " id={`id-collapseChild-${obj.id}`}>
					{obj.child.length > 0 ? obj.child.map((item, index) => <li key={`id-child-obj-${index}`}>{item.name}</li>) : <p className="text-muted fw-bold">No pages found</p>}
				</ul>
			</div>
		</>
	)
}
export default index