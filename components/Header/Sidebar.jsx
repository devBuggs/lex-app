import Button from '../Button'

const Sidebar = ({ options }) => {

    return (
        <div className={ 'flex-1 bg-body-secondary' } style={{ width: 15+'%' }}>
            <br /><br /><br />
            <span className={'text-secondary ms-3'}>Pages</span>
            <div class="list-group">
                {
                    options.map((elm, index) => <Button obj={elm} key={`id-child-obj-${index}`} />)
                }
            </div>
        </div>
    )
}
export default Sidebar