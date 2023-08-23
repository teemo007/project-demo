import React, { useState } from 'react'
/* import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown' */
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import SpeakerIcon from '@mui/icons-material/Speaker'
import useSWR from 'swr'
import Popup from '../popup/Popup'
import { useNavigate } from "react-router-dom";
import SkeletonWidget from '../../skeletons/SkeletonWidget'

const Widgets = ({ type }) => {
    
    let navigate = useNavigate(); 

    let data

    const { data: dmg, error } = useSWR('1', {
        refreshInterval: 100000
    })
    const { data: helpdesk } = useSWR('2', {
        refreshInterval: 100000
    })
    const { data: media } = useSWR('33', {
        refreshInterval: 100000
    })
    const { data: dmgChanges } = useSWR('9', { refreshInterval: 10000 })
    const { data: helpdeskChanges } = useSWR('5', { refreshInterval: 10000 })
    const { data: mediaChanges } = useSWR('6', { refreshInterval: 10000 })
    switch (type) {
        case 'dmg':
            data = {
                title: process.env.REACT_APP_PATH_1,
                counter: dmg && dmg.stock,
                icon: (
                    <GroupsRoundedIcon
                        style={{
                            color: '#1769aa',
                            fontSize: 30
                        }}
                    />
                ),
                amount_change: dmgChanges && dmgChanges.id
            }
            break
        case 'helpdesk':
            data = {
                title: process.env.REACT_APP_PATH_2,
                counter: helpdesk && helpdesk.stock,
                icon: (
                    <HeadsetMicIcon
                        style={{
                            color: '#1769aa',
                            fontSize: 30
                        }}
                    />
                ),
                amount_change: helpdeskChanges && helpdeskChanges.id
            }
            break
        case 'media':
            data = {
                title: process.env.REACT_APP_PATH_3,
                counter: media && media.stock,
                icon: (
                    <SpeakerIcon
                        style={{
                            color: '#1769aa',
                            fontSize: 30
                        }}
                    />
                ),
                amount_change: mediaChanges && mediaChanges.id
            }
            break
        default:
            break
    }

    //Pop Up

    const [showMyModal, setshowMyModal] = useState(false)
    const HandleOnClose = () => {setshowMyModal(false)}
    ///
    if (error) return <div>failed to load</div>
    //if (!dmg) return <div>loading...</div>
    if (!dmg || !helpdesk || !media) return <SkeletonWidget />
    return (
        <div className="dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-200 dark:border-gray-900 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-800 text-white font-medium group relative">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 group-hover:cursor-pointer dark:bg-gray-200" onClick={()=> navigate(data.title)}>
                {data.icon}
            </div>
            <div
                className={`flex absolute top-1 left-2 ${
                    data.amount_change === 0
                        ? 'text-[#1769aa]'
                        : data.amount_change > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                }  w-7 h-7 justify-center items-center rounded-full bg-white  text-2xl font-semibold dark:bg-gray-200`}
            >
                {data.amount_change}
            </div>

            <div className="text-right ">
                <Popup visible={showMyModal} onClose={HandleOnClose} dept={type} />
                <p className="text-6xl font-medium	">{data.counter}</p>
                <div className="hover:scale-110 duration-300 cursor-pointer" onClick={() => setshowMyModal(true)}>
                    <p>Current </p>
                    <p>Tickets</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets
