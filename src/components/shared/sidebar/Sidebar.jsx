import React, { useEffect, useState } from 'react'
//import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import SpeakerIcon from '@mui/icons-material/Speaker'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
//import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
//import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import useViewport from '../../../hooks/useViewport'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import tom from '../../../assets/tom.png'
import Meunitem from './Meunitem'

const Menus = [
    {
        title: 'main',
        submenu: true,
        submuItems: [{ title: 'Home', path: '/', icon: <HomeRoundedIcon /> }]
    },
    {
        title: 'groups',
        icon: <GroupsRoundedIcon />,
        submenu: true,
        submuItems: [
            { title: 'DMG', path: '/dmg', icon: <PersonOutlineIcon /> },
            { title: 'Helpdesk', path: '/helpdesk', icon: <HeadsetMicIcon /> },
            { title: 'media', path: '/media', icon: <SpeakerIcon /> }
        ],
        spacing: true
    },
    {
        title: 'settings',
        icon: <SettingsIcon />,
        submenu: true,
        submuItems: [{ event: 'logout', title: 'logout', /* path: '/logout', */ icon: <ExitToAppIcon /> }],
        spacing: true
    }
]

const Sidebar = () => {
    const [open, setOpen] = useState(true)

    const { width } = useViewport()

    useEffect(() => {
        if (width < 640) {
            setOpen(false)
        }
        if (width >= 768) {
            setOpen(true)
        }
    }, [width])

    

    return (
        <div className={`${open ? 'w-72 p-5' : 'w-14 p-2'} bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 pt-8 duration-300 relative z-0 dark:bg-gradient-to-l dark:from-gray-700 dark:via-gray-700 dark:to-gray-700 dark:text-gray-200`}>
            <NavigateBeforeIcon
                className={`bg-[#052D4F] text-white text-3xl rounded-full absolute -right-3 top-[calc(100vh/2)] border border-[#999] cursor-pointer  ${
                    open && 'rotate-180'
                }`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex items-center " onClick={() => setOpen(!open)}>
                <img
                    src={tom}
                    alt="logo"
                    className={`bg-white w-10 h-10 cursor-pointer max-h-full max-w-full rounded-full block float-left mr-4 duration-500 ${
                        open && 'rotate-[360deg]'
                    } `}
                />
                <span
                    className={`text-white uppercase origin-left font-medium text-2xl duration-300	${
                        !open ? 'scale-0' : ''
                    } truncate cursor-pointer`}
                >
                    Dashboard
                </span>
            </div>
            <ul className="pt-2 ">
                {Menus.map((menu, index) => {
                    return (
                        <div key={index}>
                            <Meunitem menu={menu} open={open} />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
