import React, { useState } from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import DashboardIcon from '@mui/icons-material/Dashboard'
import useLogout from '../../../hooks/useLogout'
import { NavLink, useNavigate } from 'react-router-dom'

const Meunitem = ({ menu, open }) => {
    const [submenuOpen, setsubmenuOpen] = useState(false)
    const navigate = useNavigate()
    const logout = useLogout()

    let logoutUser = async () => {
        await logout()
        navigate('/')
    }

    return (
        <>
            <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-800 rounded-md ${
                    menu.spacing ? 'mt-8' : 'mt-2'
                } dark:hover:bg-gray-950 dark:text-gray-200`}
            >
                <span className="text-white text-2xl block float-left">
                    {menu.icon ? menu.icon : <DashboardIcon />}
                </span>
                <span className={`text-base font-medium flex-1 ${!open && 'opacity-0'} duration-200 uppercase`}>
                    {menu.title}
                </span>
                {open && menu.submenu && (
                    <ArrowDropDownRoundedIcon
                        className={`${submenuOpen ? '' : 'rotate-180'}`}
                        onClick={() => {
                            setsubmenuOpen(!submenuOpen)
                        }}
                    />
                )}
            </li>
            {open && menu.submenu && submenuOpen && (
                <ul>
                    {menu.submuItems.map((submuItem, i) => (
                        <NavLink
                            to={submuItem.path}
                            key={i}
                            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-800 rounded dark:hover:bg-gray-900

                            ${menu.spacing ? 'mt-8' : 'mt-2'} ${submuItem.event === 'logout' ? 'null' : 'aria-[current=page]:border-l-4 border-blue-500 dark:border-gray-300'}`} //
                            onClick={submuItem.event === 'logout' ? logoutUser : null}
                        >
                            
                                    <span className="text-white">
                                        {submuItem.icon ? submuItem.icon : <DashboardIcon />}
                                    </span>
                                    <div className="uppercase">{submuItem.title}</div>
                             
                        </NavLink>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Meunitem
