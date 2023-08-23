import React, { useCallback, useMemo, useState } from 'react'
import useSWR from 'swr'
import { PieChart, Pie, Sector, ResponsiveContainer} from 'recharts'
import useAuth from '../../hooks/useAuth'

const Piechart = () => {
    //dark mode
    const { theme } = useAuth()
    //////////////////pie chart////////////////////////
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } =
            props
        const sin = Math.sin(-RADIAN * midAngle)
        const cos = Math.cos(-RADIAN * midAngle)
        const sx = cx + (outerRadius + 10) * cos
        const sy = cy + (outerRadius + 10) * sin
        const mx = cx + (outerRadius + 30) * cos
        const my = cy + (outerRadius + 30) * sin
        const ex = mx + (cos >= 0 ? 1 : -1) * 22
        const ey = my
        const textAnchor = cos >= 0 ? 'start' : 'end'

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={theme ? 'rgb(229, 231, 235)' : fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill={theme?"rgb(229, 231, 235)":"black"}
                >{`${value} TKTS`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={theme?"rgb(229, 231, 235)":"black"}>
                    {`(${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        )
    }
    //
    const { data: dmg } = useSWR('38', {
        refreshInterval: 100000
    })
    const { data: helpdesk } = useSWR('46', {
        refreshInterval: 100000
    })
    const { data: media } = useSWR('53', {
        refreshInterval: 100000
    })
    const totalTickets = useMemo(
        () => (dmg?.stock ) + (helpdesk?.stock ) + (media?.stock ),
        [dmg, helpdesk, media]
    )
    const [activeIndex, setActiveIndex] = useState(0)
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index)
        },
        [setActiveIndex]
    )
    const data01 = [
        { name: 'DMG', value: dmg?.stock, fill: 'url(#colorDmg)' },
        { name: 'Helpdesk', value: helpdesk?.stock, fill: 'url(#colorHelpDesk)' },
        { name: 'Media', value: media?.stock, fill: 'url(#colorMedia)' }
    ]
    if (!dmg || !helpdesk || !media) return 'loading'
    return (
        <div className=" w-full h-full rounded  mb-0 px-0 border-0 relative dark:text-white ">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart>
                    <defs>
                        <linearGradient id="colorDmg" x1="1" y1="0.5" x2="0" y2="0.5">
                            <stop offset="0%" stopColor="rgb(55, 162, 255)" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="rgb(116, 21, 219)" stopOpacity={0.8} />
                        </linearGradient>
                        <linearGradient id="colorHelpDesk" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(255, 0, 135)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(135, 0, 157)" stopOpacity={0.8} />
                        </linearGradient>
                        <linearGradient id="colorMedia" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(255, 191, 0)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(224, 62, 76)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
                        fill="green" //Add the id 'colorUv' which is used in linearGradient
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
            <p className="absolute left-[30%] bottom-0 h-16 text-3xl font-medium dark:text-gray-200">
                Total {totalTickets} tickets
            </p>
        </div>
    )
}

export default Piechart
