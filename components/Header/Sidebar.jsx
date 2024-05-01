'use client';
import Button from '../Button';

const Sidebar = ({ options }) => {

    return (
        <div className={ 'flex-1 bg-body-secondary' } style={{ width: 20+'%' }}>
            <br /><br /><br />
            <span className={'text-secondary ms-3'}>Metadata</span>
            <div className="list-group">
                {
                    options.map((elm, index) => <Button obj={elm} key={`id-child-obj-${index}`} />)
                }
            </div>
        </div>
    )
}
export default Sidebar