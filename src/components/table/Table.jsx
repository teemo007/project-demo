import React, { useState /* useMemo */ } from 'react'
//import useSWR from 'swr'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import FirstPageIcon from '@mui/icons-material/FirstPage'
/* import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown' */
import tom from '../../assets/tom.png'
/* import { use } from 'echarts' */

const Table = (props) => {
    const table = [
        {
            Technical_Group: 'Help Desk',
            ID: 199221,
            Title: '10 Awesome Ways to Photograph Horses',
            Status: 'New',
            Priority: 'High',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Samira Savage',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'DMG',
            ID: 199223,
            Title: 'How to Increase Your Income Using Just Your Knees.',
            Status: 'New',
            Priority: 'Critical',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Samira Savage',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'NetWork',
            ID: 199224,
            Title: '21 Myths About Horses Debunked',
            Status: 'New',
            Priority: 'High',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Frank Wise',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199229,
            Title: 'Demon : Fact versus Fiction',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'May Holman',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 129226,
            Title: 'Add a User to Blackboard Request',
            Status: 'New',
            Priority: 'Critical',
            Created: '2023-08-22T22:02:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Mahnoor Manning',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'TECH',
            ID: 194226,
            Title: 'Unboxing My New Demon Poo',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:01:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Ellen Velasquez',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 159226,
            Title: 'Mistakes That Horses Make and How to Avoid Them',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:05:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Jaxon Leach',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199216,
            Title: 'Puppies Dreams',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Calvin Payne',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 119226,
            Title: 'The Charming Side of the Knight',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Minnie Goodman',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
        {
            Technical_Group: 'Help Desk',
            ID: 199286,
            Title: 'Bridge Over Malicious Horses',
            Status: 'New',
            Priority: 'Medium',
            Created: '2023-08-22T22:10:04',
            Modified: '2023-08-22T22:10:04',
            Department: '',
            Submitter: 'Lacie Barnes',
            Owner: null,
            Location: '',
            Category: 'Accounts::Active Directory (Staff/Faculty)::New Account Request',
            Type: ''
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(5)

    const [pageShouldShow, setpageShouldShow] = useState(5)
    const [maxPageShouldShow, setmaxPageShouldShow] = useState(5)
    const [minPageShouldShow, setminPageShouldShow] = useState(0)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = table?.slice(indexOfFirstItem, indexOfLastItem)

    const calPages = () => {
        const pages = []
        for (let i = 1; i <= Math.ceil(table?.length / itemsPerPage); i++) {
            //The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number
            pages.push(i)
        }
        return pages
    }

    const handlePage = (e) => {
        setCurrentPage(Number(e.target.id))
    }
    const handleNextpage = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageShouldShow) {
            setmaxPageShouldShow(maxPageShouldShow + pageShouldShow)
            setminPageShouldShow(minPageShouldShow + pageShouldShow)
        }
    }
    const handlePrevpage = () => {
        /* console.log(currentPage)
        console.log(calPages) */
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageShouldShow === 0) {
            setmaxPageShouldShow(maxPageShouldShow - pageShouldShow)
            setminPageShouldShow(minPageShouldShow - pageShouldShow)
        }
    }

    const initMaxPage = 5
    const initMinPage = 0
    const maxLastPage = calPages().slice(-1)[0]
    const minLastPage = maxLastPage - initMaxPage

    const handleFirstpage = () => {
        setCurrentPage(calPages()[0])
        setmaxPageShouldShow(initMaxPage)
        setminPageShouldShow(initMinPage)
    }
    const handleLastpage = () => {
        setCurrentPage(calPages().slice(-1)[0])
        setmaxPageShouldShow(maxLastPage)
        setminPageShouldShow(minLastPage)
    }
    ////// handle PagePerRow
    /* const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    } */

    // Serch function
    const [search, setSearch] = useState('')
    const handleSearch = (table) => {
        if (search === '') return currentItems

        return table
            ?.filter(
                (val) =>
                    val?.Title.toLowerCase().includes(search) ||
                    val?.ID.toString().includes(search) ||
                    (val && val.Owner && val.Owner.toLowerCase().includes(search.toLowerCase())) ||
                    (val && val.Submitter && val.Submitter.toLowerCase().includes(search.toLowerCase())) ||
                    val?.Created.includes(search) ||
                    val?.Technical_Group.toLowerCase().includes(search.toLowerCase()) ||
                    val?.Status.toLowerCase().includes(search.toLowerCase()) ||
                    val?.Priority.toLowerCase().includes(search.toLowerCase())
            )
            .slice(indexOfFirstItem, indexOfLastItem)
    }

    const popupFilter = (loc) => {
        if (search === '')
            return table
                .filter((val) => val?.Location === loc || val?.Category === loc || val?.Department === loc)
                .slice(indexOfFirstItem, indexOfLastItem)
        return table
            .filter((val) => val?.Location === loc || val?.Category === loc || val?.Department === loc)
            .slice(indexOfFirstItem, indexOfLastItem)
            ?.filter(
                (val) =>
                    val?.Title.toLowerCase().includes(search) ||
                    val?.ID.toString().includes(search) ||
                    (val && val.Owner && val.Owner.toLowerCase().includes(search.toLowerCase())) ||
                    (val && val.Submitter && val.Submitter.toLowerCase().includes(search.toLowerCase())) ||
                    val?.Created.includes(search) ||
                    val?.Technical_Group.toLowerCase().includes(search.toLowerCase()) ||
                    val?.Status.toLowerCase().includes(search.toLowerCase()) ||
                    val?.Priority.toLowerCase().includes(search.toLowerCase())
            )
            .slice(indexOfFirstItem, indexOfLastItem)
    }

    if (!table) return 'loading'
    return (
        <div className="mt-0 mx-0 ">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto max-h-96">
                    <table className="w-full ">
                        <thead>
                            <tr className="text-lg font-semibold tracking-wide text-center text-gray-500  dark:border-gray-700 bg-gray-50 dark:text-gray-200 dark:bg-gray-700">
                                <th colSpan="8" className=" px-4 py-3">
                                    {/* <div className='relative'> */}
                                    <input
                                        placeholder="Search..."
                                        type="search"
                                        className="focus:outline-none focus:ring focus:ring-blue-600 dark:focus:ring-gray-900 rounded dark:bg-gray-800 dark:text-gray-200"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    {/* <span className="absolute right-1">X</span> */}
                                    {/* </div> */}
                                </th>
                            </tr>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-600 bg-gray-50 dark:text-gray-200 dark:bg-gray-700">
                                <th className="px-4 py-3">TicketID</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Created Date</th>
                                <th className="px-4 py-3">Group</th>
                                <th className="px-4 py-3">Technican</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Priority</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-600 dark:bg-gray-700 dark:text-gray-200">
                            {(props?.location ? popupFilter(props?.location) : handleSearch(table)) /*currentItems*/
                                ?.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 "
                                    >
                                        <td className="px-4 py-3 ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src={tom}
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p
                                                        className="font-semibold hover:cursor-doubleClick"
                                                        onDoubleClick={() => {
                                                            window.open(
                                                                '#' +
                                                                    item.ID,
                                                                '_blank',
                                                                'noreferrer'
                                                            )
                                                        }}
                                                    >
                                                        {item.ID}
                                                    </p>
                                                    {/* <p className="text-xs text-gray-600 dark:text-gray-200">10x Developer</p> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.Submitter === null ? 'Not Assign' : item.Submitter}
                                        </td>
                                        <td className="px-4 py-3 text-xs">
                                            {item.Title === null ? 'Not Assign' : item.Title}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.Created === null ? 'Not Assign' : item.Created}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.Technical_Group === null ? 'Not Assign' : item.Technical_Group}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.Owner === null ? 'Not Assign' : item.Owner}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.Status === null ? 'Not Assign' : item.Status}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <span
                                                className={`px-2 py-1 font-semibold leading-tight ${
                                                    item?.Priority === 'Medium'
                                                        ? 'text-green-700 bg-green-100'
                                                        : item?.Priority === 'High'
                                                        ? 'text-red-700 bg-red-100 '
                                                        : 'text-fuchsia-700	bg-fuchsia-100'
                                                } rounded-full dark:bg-green-700 dark:text-green-100`}
                                            >
                                                {' '}
                                                {item.Priority === null ? 'Not Assign' : item.Priority}{' '}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-200 dark:bg-gray-700">
                    <span className="flex items-center col-span-3">
                        {' '}
                        Showing {indexOfFirstItem + 1}-{indexOfLastItem} of {table.length}{' '}
                    </span>
                    <span className="col-span-2"></span>
                    {/*  <!-- Pagination --> */}
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <select
                                        className={`px-0 py-1 rounded-md rounded-l-lg text-white bg-blue-600 relative hover:cursor-pointer`}
                                        onChange={(e) => setitemsPerPage(e.target.value)}
                                    >
                                        {/* {open ? (
                                            <div className="overflow-auto  absolute bg-blue-100  px-0 py-1 rounded-md rounded-l-lg w-full ">
                                                <div onClick={() => setitemsPerPage(5)}>5</div>

                                                <div onClick={() => setitemsPerPage(10)}>10</div>
                                            </div>
                                        ) : null}
                                        {itemsPerPage}
                                        <ArrowDropDownIcon className={`${open ? 'rotate-180' : null}`} /> */}

                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </li>
                                <li>
                                    <button
                                        className={`px-0 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple ${
                                            currentPage === calPages()[0] ? 'cursor-not-allowed text-gray-300' : null
                                        }`}
                                        aria-label="Previous"
                                        onClick={handleFirstpage}
                                    >
                                        <FirstPageIcon sx={{ fontSize: 'large' }} />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple ${
                                            currentPage === calPages()[0] ? 'cursor-not-allowed text-gray-300' : null
                                        }`}
                                        aria-label="Previous"
                                        onClick={handlePrevpage}
                                        disabled={currentPage === calPages()[0] ? true : false}
                                    >
                                        <NavigateBeforeIcon sx={{ fontSize: 'large' }} />
                                    </button>
                                </li>
                                {calPages().map((page, index) =>
                                    page < maxPageShouldShow + 1 && page > minPageShouldShow ? (
                                        <li key={index}>
                                            <button
                                                id={page}
                                                onClick={handlePage}
                                                className={`px-3 py-1 rounded-md focus:outline-none focus:outline-blue-950 ${
                                                    currentPage === page
                                                        ? 'text-white duration-150 bg-blue-600 transition'
                                                        : ''
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    ) : null
                                )}
                                <li>
                                    <button
                                        className={`px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple rotate-180 ${
                                            currentPage === calPages().slice(-1)[0]
                                                ? 'cursor-not-allowed text-gray-300'
                                                : null
                                        } `}
                                        aria-label="Next"
                                        onClick={handleNextpage}
                                        disabled={currentPage === calPages().slice(-1)[0] ? true : false}
                                    >
                                        <NavigateBeforeIcon sx={{ fontSize: 'large' }} />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`px-0 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple rotate-180 ${
                                            currentPage === calPages().slice(-1)[0]
                                                ? 'cursor-not-allowed text-gray-300'
                                                : null
                                        }`}
                                        aria-label="Previous"
                                        onClick={handleLastpage}
                                    >
                                        <FirstPageIcon sx={{ fontSize: 'large' }} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Table
