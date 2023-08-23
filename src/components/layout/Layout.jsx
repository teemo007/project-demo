import { Outlet } from 'react-router-dom'
import Sidebar from '../shared/sidebar/Sidebar'
import Navbar from '../shared/Navbar'

const Layout = () => {
    return (
        <div className="flex bg-white m-h-screen dark:bg-gray-800">
            {/* <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden"> */}
            <Sidebar />
            <div className="flex-auto  ">
                <Navbar />
                <div className="p-0 ">
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default Layout
