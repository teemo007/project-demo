import Table from '../table/Table'

const Popup = ({ visible, onClose, dept, location }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container")
        onClose();
    }
    if (!visible) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 
        flex justify-center items-center" onClick={handleOnClose} id='container'>
            <div className="relative ">
                <button className='absolute -top-5 left-0 font-bold text-white' onClick={onClose}>X</button>
                <Table table={dept} location={location}/>
            </div>
        </div>
    )
}

export default Popup
