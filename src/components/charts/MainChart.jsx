import React from 'react'
import ReactECharts from 'echarts-for-react'
import useSWR from 'swr'
import dark from '../../chartConfig/dark.json'
import useAuth from '../../hooks/useAuth' 

const MainChart = () => {
    //
    const { theme } = useAuth()
    const now = new Date()

    let group = ['Desktop Management', 'Help Desk', 'classroom support'] /// need to make a list right here
    const { data: dmg } = useSWR(`33`, { refreshInterval: 10000 })
    const { data: helpdesk } = useSWR(`44`, {
        refreshInterval: 10000
    })
    const { data: media } = useSWR(`55`, { refreshInterval: 10000 })
    const option = {
        color: ['#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: `${now.getFullYear()} Tickets`,
            textStyle: {
                fontWeight: 'normal',
                
                fontSize: 20,
                overflow: 'truncate'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['DMG', 'Help Desk', 'Media'],
            
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                
            }
        ],
        yAxis: [
            {
                type: 'value',
                
            }
        ],
        series: [
            {
                name: 'DMG',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                /* itemStyle: {
                    opacity: 0.5,  
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0.5,
                        x2: 1,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(56, 189, 248)' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(56, 189, 248)' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(59, 130, 246)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }, */
                areaStyle: {
                    opacity: 0.8,
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0.5,
                        x2: 0,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(55, 162, 255)' // 0% 处的颜色
                            },
                            /* {
                                offset: 0.5,
                                color: 'rgb(56, 189, 248)' // 50% 处的颜色
                            }, */
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Help Desk',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                /* itemStyle: {
                    opacity: 0.5, 
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0.5,
                        x2: 1,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(251, 146, 60)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(251, 113, 133)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }, */
                areaStyle: {
                    opacity: 0.8,
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0.5,
                        x2: 0,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(255, 0, 135)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Media',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                /* itemStyle: {
                    opacity: 0.5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0.5,
                        x2: 1,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(254, 240, 138)' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(253, 224, 71)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(250, 204, 21)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }, */
                areaStyle: {
                    opacity: 0.8,
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0.5,
                        x2: 0,
                        y2: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(255, 191, 0)' // 0% 处的颜色
                            },

                            {
                                offset: 1,
                                color: 'rgb(224, 62, 76)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    }
    if (!dmg) return 'loading'
    return (
        <div className="rounded-t mb-0 px-0 border-0">
            <ReactECharts option={option} style={{ height: 555 }} theme={theme ? dark : null} />
        </div>
    )
}

export default MainChart
