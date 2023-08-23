import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
/* import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined' */
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Tooltip from '@mui/material/Tooltip';
/* import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined' */
import React, { useEffect, useState } from 'react'
import logo2 from '../../assets/logo1.png'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const element = document.documentElement
    const { theme, setTheme } = useAuth()

    useEffect(() => {
        localStorage.setItem('darkmode', theme)
    }, [theme])

    useEffect(() => {
        switch (theme) {
            case true:
                element.classList.add('dark')
                break
            case false:
                element.classList.remove('dark')
                break
            default:
                break
        }
    }, [theme, element.classList])

    const handleSearch = () => {
        // Build the search URL with the search query
        const searchUrl = `https://test?ID=${encodeURIComponent(searchQuery)}`

        // Open the search URL in a new tab
        window.open(searchUrl, '_blank')

        // Clear the search input
        setSearchQuery('')
    }

    //logout
    const navigate = useNavigate()
    const logout = useLogout()

    let logoutUser = async () => {
        await logout()
        navigate('/')
    }

    return (
        <div className="flex bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 items-center text-xs dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-700 dark:to-gray-700 dark:text-gray-200">
            <div className="w-full p-1 pt-2 flex items-center justify-between">
                <div className=" items-center p-1 border border-solid border-[lightgray] flex bg-white dark:bg-gray-800 dark:text-gray-200 rounded">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="bg-transparent border-none outline-0 placeholder:text-xs w-20 lg:w-40"
                    />
                    <SearchOutlinedIcon className="text-xl" onClick={handleSearch} />
                </div>
                <div className="flex items-center text-white">
                    {/* <div className="flex items-center mr-4">
                        <LanguageOutlinedIcon className="text-xl" />
                        English
                    </div>*/}
                    <div className="flex items-center mr-4">
                        <p>Welcome</p>
                    </div>
                    <div
                        className="flex items-center mr-4 rounded-full dark:bg-slate-700 cursor-pointer"
                        onClick={() => setTheme(!theme)}
                    >
                        {!theme ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
                    </div>
                    {/* <div className="flex items-center mr-4">
                        <FullscreenExitOutlinedIcon className="text-xl" />
                    </div>
                    <div className="flex items-center mr-4">
                        <NotificationsNoneOutlinedIcon className="text-xl" />
                    </div>
                    <div className="flex items-center mr-4">
                        <ChatBubbleOutlineOutlinedIcon className="text-xl" />
                    </div>*/}

                    <div className="flex items-center mr-1 ">
                        <img
                            //src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            src={logo2}
                            alt=""
                            className="w-10 h-10 rounded-full "
                        />
                    </div>
                    <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-200"></div>
                    <div className="flex items-center mr-4 cursor-pointer" onClick={logoutUser}>
                    <Tooltip title="logout" arrow>
                        <ExitToAppIcon />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
