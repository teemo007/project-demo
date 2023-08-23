import React from 'react'
import Widgets from '../components/widgets/Widgets'
import Piechart from '../components/charts/Piechart'
import Table from '../components/table/Table'
import MainChart from '../components/charts/MainChart'

const Home = () => {
    return (
        <div className="min-h-screen ">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-4 gap-4 ">
                <Widgets type={'dmg'} />
                <Widgets type={'helpdesk'} />
                <Widgets type={'media'} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-4 ">
                {/*  pie chart */}

                <div className="relative flex flex-col  min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:text-gray-200 dark:bg-gray-700 w-full shadow-lg rounded">
                    <Piechart />
                </div>

                {/* line chart */}

                <div className="col-span-2 relative flex flex-col min-w-0 break-words bg-gray-50 dark:text-gray-200 dark:bg-gray-700 w-full shadow-lg rounded">
                    <MainChart />
                </div>
            </div>
            {/* table */}
            <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4 ">
                <Table table={process.env.REACT_APP_PATH_4} />
            </div>
        </div>
    )
}

export default Home
