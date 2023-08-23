import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import cloneDeep from 'lodash.clonedeep'
import Carousel from '../carousel/Carousel'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import Table from '../table/Table'
import Popup from '../popup/Popup'
import useAuth from '../../hooks/useAuth'
import dark from '../../chartConfig/dark.json'

const Depts = (props) => {
    /// change theme
    const { theme } = useAuth()
    ///
    const now = new Date()
    const currentYear = now.getFullYear() // 2023
    const previousYear = currentYear - 1 // 2022
    let group = props.dept[1]

    const department = [
        {
            Technical_Group: 'Help Desk',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'Help Desk',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dd',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'DMG',
            ID: 199221,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'DMG',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request1',
            Type: ''
        },
        {
            Technical_Group: 'NetWork',
            ID: 199236,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'NetWork',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request2',
            Type: ''
        },
        {
            Technical_Group: 'NetWork',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'NetWork',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request2',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request3',
            Type: ''
        },
        {
            Technical_Group: 'TECH',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'TECH',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'dc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request4',
            Type: ''
        },
        {
            Technical_Group: 'TECH',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'TECH',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'vc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request4',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'Help Desk',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'bc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request1',
            Type: ''
        },
        {
            Technical_Group: 'DMG',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'DMG',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'bc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request1',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: 'Help Desk',
            Submitter: 'Brian Haggerty',
            Owner: null,
            Location: 'vc',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request3',
            Type: ''
        }
    ]
    const dmgChanges = Math.floor(Math.random() * 100)

    const hours = [{"hour": "2023-08-22 12:00:00", "count": 1}, {"hour": "2023-08-22 13:00:00", "count": 2}, {"hour": "2023-08-22 15:00:00", "count": 6}, {"hour": "2023-08-22 16:00:00", "count": 1},]

    const weeks = [{"createtime": "2023-08-21", "count": 5}, {"createtime": "2023-08-22", "count": 1}, {"createtime": "2023-08-23", "count": 0}, {"createtime": "2023-08-24", "count": 0}, {"createtime": "2023-08-25", "count": 0}, {"createtime": "2023-08-26", "count": 0}, {"createtime": "2023-08-27", "count": 0}]
    const weeklyV = Math.floor(Math.random() * 10)

    const dayTicketsInMonth = [{"day": "2023-08-01", "count": 9}, {"day": "2023-08-02", "count": 3}, {"day": "2023-08-03", "count": 3}, {"day": "2023-08-07", "count": 14}, {"day": "2023-08-08", "count": 7}, {"day": "2023-08-09", "count": 5}, {"day": "2023-08-10", "count": 2}, {"day": "2023-08-12", "count": 1}, {"day": "2023-08-14", "count": 4}, {"day": "2023-08-15", "count": 4}, {"day": "2023-08-16", "count": 6}, {"day": "2023-08-17", "count": 6}, {"day": "2023-08-18", "count": 3}, {"day": "2023-08-21", "count": 5}, {"day": "2023-08-22", "count": 1}]

    const month = [{"count": 1, "month": "March"}, {"count": 1, "month": "April"}, {"count": 3, "month": "May"}, {"count": 9, "month": "June"}, {"count": 11, "month": "July"}, {"count": 99, "month": "August"}, {"count": 165, "month": "September"}, {"count": 133, "month": "October"}, {"count": 138, "month": "November"}, {"count": 122, "month": "December"}]
    const month0 = [{"count": 1, "month": "March"}, {"count": 1, "month": "April"}, {"count": 3, "month": "May"}, {"count": 9, "month": "June"}, {"count": 11, "month": "July"}, {"count": 99, "month": "August"}, {"count": 165, "month": "September"}, {"count": 133, "month": "October"}, {"count": 138, "month": "November"}, {"count": 122, "month": "December"}]

    const allLocations = department?.map((duplicateLocation) => `${duplicateLocation.Location}`)
    let uniqueLocation = [...new Set(allLocations)]
    const LocationCounts = uniqueLocation.map((value) => [value, allLocations.filter((str) => str === value).length])
    const data01 = LocationCounts?.map((location) => ({
        name: location[0],
        value: location[1]
    }))

    const allDepartment = department?.map((duplicateDepartment) => `${duplicateDepartment.Department}`)
    let uniqueDepartment = [...new Set(allDepartment)]

    const DepartmentCounts = uniqueDepartment.map((value) => [
        value,
        allDepartment.filter((str) => str === value).length
    ])
    const data012 = DepartmentCounts?.map((Department) => ({
        name: Department[0],
        value: Department[1]
    }))
    //
    const databyHour = hours?.map((hour) => ({
        name: hour.hour,
        value: [hour.hour, hour.count]
    }))
    const databyWeek = weeks?.map((week) => ({
        name: week.createtime,
        value: [week.createtime, week.count]
    }))

    const databyMonth = dayTicketsInMonth?.map((month) => ({
        name: month.day,
        value: [month.day, month.count]
    }))
    //

    const allCategory = department?.map((duplicateCategory) => `${duplicateCategory.Category}`)
    let uniqueCategory = [...new Set(allCategory)]

    const CategoryCounts = uniqueCategory.map((value) => [value, allCategory.filter((str) => str === value).length])
    const data011 = CategoryCounts?.map((Category) => ({
        name: Category[0],
        value: Category[1]
    }))

    var option1 = {
        title: {
            text: 'Tickets base on Category',
            /* subtext: "Fake Data", */
            left: 'center',
            color: 'rgb(156 163 175)'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            show: false,
            type: 'scroll',
            orient: 'horizontal',
            padding: [0, 50, 0, 0],
            x: 'center',
            y: 'bottom',
            itemGap: 15
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: data011,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    // Pie Chart 3

    var option2 = {
        title: {
            text: 'Tickets base on Department',
            /* subtext: "Fake Data", */
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            orient: 'vertical',
            left: 'right',
            data: [] //// remove this line if you want to show the legend!!!
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: data012,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    // pop up
    const [showMyModal, setshowMyModal] = useState(false)
    const HandleOnClose = () => {
        setshowMyModal(false)
    }
    const [loc, setLoc] = useState()

    const onChartClick = (params) => {
        setshowMyModal(true)
        setLoc(params.data.name)
    }
    const onEvens = {
        click: onChartClick
    }
    /// Pie Chart 2

    var option3 = {
        title: {
            text: 'Tickets base on Locations',
            /* subtext: "Fake Data", */
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            orient: 'vertical',
            left: 'right',
            data: [] //// remove this line if you want to show the legend!!!
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: data01,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    //// line Chart 2
    const currentYearMonth = Array.from({ length: 12 }, (item, index) => currentYear + '-' + (index + 1))
    const previousYearMonth = Array.from({ length: 12 }, (item, index) => previousYear + '-' + (index + 1))

    const colors = [
        {
            x: 0,
            y: 0.5,
            x2: 1,
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
        },
        {
            x: 0,
            y: 0.5,
            x2: 1,
            y2: 0.5,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgb(255, 0, 135)' // 0% 处的颜色
                },
                /* {
                offset: 0.5,
                color: 'rgb(56, 189, 248)' // 50% 处的颜色
            }, */
                {
                    offset: 1,
                    color: 'rgb(135, 0, 157)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        }
    ]
    //
    var option4 = {
        color: colors,
        title: {
            text: 'Forecast'
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {},
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return (
                                'Year  ' +
                                params.value +
                                (params.seriesData.length ? ': ' + params.seriesData[0].data : '')
                            )
                        }
                    }
                },
                // prettier-ignore
                data: currentYearMonth
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return (
                                'Year  ' +
                                params.value +
                                (params.seriesData.length ? ': ' + params.seriesData[0].data : '')
                            )
                        }
                    }
                },
                // prettier-ignore
                data: previousYearMonth
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: `Year(${previousYear})`,
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: month0?.map((n) => n.count)
            },
            {
                name: `Year(${currentYear})`,
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: month?.map((n) => n.count)
            }
        ]
    }

    /////pie charts dict
    const piecharts = [
        {
            chart: (
                <div className="grid grid-flow-col justify-stretch p-4 gap-4 w-full items-center text-center text-white ">
                    <div className="dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-200 dark:border-gray-900 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 h-full space-y-32 shadow-lg rounded-md border-b-4 border-blue-800">
                        <div className="font-bold text-sm sm:text-xl dark:text-gray-200">Current Tickets</div>
                        <div
                            className={`font-bold	text-6xl sm:${
                                department && department.length > 99 ? 'text-7xl' : 'text-8xl'
                            } rounded-full bg-white dark:bg-gray-200 text-black h-24 w-24 sm:h-32 sm:w-32 mx-auto flex items-center justify-center`}
                        >
                            {department && department.length}
                        </div>
                    </div>
                    <div className="dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-200 dark:border-gray-900 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 h-full space-y-32 shadow-lg rounded-md border-b-4 border-blue-800">
                        <div className="font-bold text-sm sm:text-xl dark:text-gray-200">24 HRS V.</div>
                        <div
                            className={`font-bold text-6xl sm:text-8xl ${
                                dmgChanges  > 0
                                    ? 'text-red-600'
                                    : dmgChanges  === 0
                                    ? 'text-black'
                                    : 'text-green-600'
                            } rounded-full bg-white dark:bg-gray-200 h-24 w-24 sm:h-32 sm:w-32 mx-auto flex items-center justify-center`}
                        >
                            {dmgChanges }
                        </div>
                    </div>
                    <div className="dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-200 dark:border-gray-900 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 h-full space-y-32 shadow-lg rounded-md border-b-4 border-blue-800">
                        <div className="font-bold dark:text-gray-200 text-sm sm:text-xl">Wkly Tickets V.</div>
                        <div
                            className={`font-bold	text-6xl sm:text-8xl ${
                                weeklyV  > 0
                                    ? 'text-red-600'
                                    : weeklyV  === 0
                                    ? 'text-black'
                                    : 'text-green-600'
                            } rounded-full bg-white dark:bg-gray-200 h-24 w-24 sm:h-32 sm:w-32 mx-auto flex items-center justify-center`}
                        >
                            {weeklyV }
                        </div>
                    </div>
                </div>
            ),
            title: '1'
        },
        {
            chart: (
                <ReactECharts
                    option={option1}
                    style={{ height: 400, width: '100%' }}
                    onEvents={onEvens}
                    theme={theme ? dark : 'light'}
                />
            ),
            title: '2'
        },
        {
            chart: (
                <ReactECharts
                    option={option3}
                    style={{ height: 400, width: '100%' }}
                    onEvents={onEvens}
                    theme={theme ? dark : 'light'}
                />
            ),
            title: '3'
        },
        {
            chart: (
                <ReactECharts
                    option={option2}
                    style={{ height: 400, width: '100%' }}
                    onEvents={onEvens}
                    theme={theme ? dark : 'light'}
                />
            ),
            title: '4'
        }
    ]

    //line chart dict
    const option = {
        title: {
            text: `${currentYear} ${props.dept[0]} Tickets`
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [`${props.dept[0]}`]
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '4%',
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
                ]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: `${props.dept[0]}`,
                type: 'line',

                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgb(29, 78, 216)'
                        },

                        {
                            offset: 1,
                            color: 'rgb(17, 24, 39)'
                        }
                    ])
                },
                data: month?.map((n) => n.count)
            }
        ]
    }
    //

    var emptyArr = []

    var month_now = now.getMonth() + 1,
        day_now = now.getDate()
    var time_pre = `${currentYear}/${month_now}/${day_now} 00:00:00`
    var ttt = new Date(time_pre).getTime()
    for (var i = 0; i < 25; i++) {
        emptyArr.push([ttt, '']) //传入value的值为空则该值点不会显示在图表中
        ttt = ttt + 3600000
    }
    // option 5, show by hour by default.

    const option5 = {
        title: {
            text: 'Tickets Comes In Every Hour'
        },
        tooltip: {
            trigger: 'axis',
            extraCssText: 'width:80px;height:auto;background-color:rgba(0,0,0,0.3);color:#fff',
            formatter: function (params) {
                var str = ''
                params.forEach((item) => {
                    str += item.value[1]
                })
                if (str.length === 0) {
                    return ''
                } else {
                    return str + ' tickets'
                }
            }
        },
        legend: {},
        toolbox: {
            show: true,
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        grid: {
            top: 60,
            left: 45,
            right: 50,
            bottom: 30
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'time',

                splitNumber: 7, //设置下这里将x分为7段 8个刻度值
                splitLine: {
                    show: false //Hide the line on the x-axis
                },
                axisTick: {
                    show: false //Set this to false to prevent the axis tick from showing.
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    // Format data to only show hours
                    showMaxLabel: true, //Show the last value of the x-axis
                    formatter: function (value, index) {
                        //Write the time format you need here
                        var t_date = new Date(value)

                        if (index !== 7) {
                            /* console.log(t_date.getHours()); */
                            return [t_date.getHours(), '00'].join(':')
                        } else {
                            return '12:00'
                        }
                    }
                },

                data: []
            }
        ],
        label: {
            show: true,
            rotate: 0,
            position: 'top',
            color: 'black'
        },
        yAxis: [
            {
                type: 'value',

                max: 25,
                min: 0,
                interval: 5
            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                data: [],
                showSymbol: true
            },
            {
                name: '',
                type: 'line',
                data: emptyArr //Empty Array
            }
        ]
    }

    const datax = [databyHour, /* databyDay, */ databyWeek, databyMonth]
    const datay = [
        'Tickets Comes In Every Hour',
        /* 'Tickets Comes In Every Day', */
        'Tickets Comes In A Week',
        'Tickets Comes In A Month'
    ]

    const [optionx, setOptionx] = useState(option5)

    useEffect(() => {
        optionx.series[0].data = datax[+0] // convert sting to number. eg: put '+' sign at the front
    })

    function fetchNewData(i) {
        const newOption = cloneDeep(optionx) // immutable
        newOption.title.text = datay[+i]
        if (+i === 1 || +i === 2) {
            newOption.xAxis[0].splitNumber = 8
            newOption.xAxis[0].axisLabel = {
                formatter: '{MM}-{dd}'
            }
        } else if (+i === 0) {
            newOption.xAxis[0].splitNumber = 7
            newOption.xAxis[0].axisLabel = {
                showMaxLabel: true,
                formatter: function (value, index) {
                    var t_date = new Date(value)
                    /* console.log(index); */
                    if (index !== 7) {
                        return [t_date.getHours(), '00'].join(':')
                    } else {
                        return '12:00'
                    }
                }
            }
        }

        newOption.series[0].data = datax[+i]

        setOptionx(newOption)
    }
    /////

    const linecharts = [
        {
            chart: (
                <ReactECharts
                    option={option}
                    style={{ height: '100%', width: '100%' }}
                    theme={theme ? dark : 'light'}
                />
            )
        },
        {
            chart: (
                <ReactECharts
                    option={option4}
                    style={{ height: '100%', width: '100%' }}
                    theme={theme ? dark : 'light'}
                />
            )
        },
        {
            chart: (
                <div className="w-full">
                    <select
                        className="dark:bg-gray-500 dark:text-gray-200 bg-blue-200 rounded"
                        onChange={(e) => {
                            fetchNewData(e.target.value)
                        }}
                    >
                        <option value="0">Hourly</option>

                        <option value="1">Weekly</option>
                        <option value="2">Monthly</option>
                    </select>

                    <ReactECharts
                        option={optionx}
                        style={{ height: 370, width: '100%' }}
                        theme={theme ? dark : 'light'}
                    />
                </div>
            )
        }
    ]

    return (
        <div className="min-h-screen dark:bg-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 ">
                {/*  pie chart */}

                <div className="relative flex flex-col  min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-700 w-full shadow-lg rounded ">
                    <Carousel charts={piecharts} />
                    <Popup visible={showMyModal} onClose={HandleOnClose} dept={props.dept[0]} location={loc} />
                </div>

                {/* line chart */}

                <div className=" relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-700 w-full shadow-lg rounded">
                    <Carousel charts={linecharts} />
                </div>
            </div>
            {/* table */}
            <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
                <Table table={props.dept[0]} />
            </div>
        </div>
    )
}

export default Depts
