/* import './login.scss'; */
import { useEffect, useState, useRef } from 'react'
import useAuth from '../hooks/useAuth'
import axios from '../api/axios'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    //set auth state and store in global state.
    const { setAuth, persist, setPersist } = useAuth() //global auth

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, seterrMsg] = useState('')

    //AXIOS

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        seterrMsg('')
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault() //prevent the default behavior of the form which will reload the page.
        try {
            //console.log(window.location.hostname)
            /* const response = await axios.post(
                `http://${process.env.REACT_APP_HOST}${process.env.REACT_APP_AUTHURL}`,
                {},
                {
                    withCredentials: true,
                    headers: {
                        user: user,
                        pwd: password
                        //withCredentials: true, // need to figure out
                    }
                }
            ) */
            //console.log(window.location.hostname)
            //console.log(JSON.stringify(response?.data?.accessToken));
            const accessToken = "123"
            setAuth({ user, accessToken })
            setPassword('')
            setUser('')
            //setSuccess(true);
            navigate(from, { replace: true }) //replace success page that
            //console.log(from);
        } catch (err) {
            if (!err?.response) {
                seterrMsg('No Server Response')
            } else if (err?.response?.status === 401) {
                seterrMsg('Unauthorized User')
            }
            errRef.current.focus()
        }
    }
    const togglePersist = () => {
        setPersist((prev) => !prev)
    }
    useEffect(() => {
        localStorage.setItem('persist', persist)
    }, [persist])
    return (
        <div className=" m-0 p-0 bg-gradient-to-r from-[#373B44] to-[#4286f4] h-screen overflow-hidden box-border">
            <div className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] shadow-blue-500/50 rounded-lg">
                <div className="text-center px-0 py-5 border-b-[silver] border-b border-solid font-bold text-3xl">
                    Login
                </div>
                <form onSubmit={handleSubmit} className="px-10 py-0 box-border">
                    <div className="relative mx-0 my-[30px] border-b-2 border-b-[#adadad] border-solid ">
                        <input
                            type="text"
                            id="username"
                            className="w-full h-10 text-base px-[5px] py-0 border-[none] outline-none peer"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <span className="login-custom-span before:bg-blue-600 peer-valid:before:w-full peer-focus:before:w-full " />
                        <label
                            htmlFor="username"
                            className="absolute text-[#adadad] -translate-y-1/2 text-base    
								peer-focus:top-[-5px] peer-focus:text-blue-600 peer-valid:top-[-5px] peer-valid:text-blue-600 pointer-events-none duration-500 left-[5px] top-1/2" //Sibling selector variants : peer
                        >
                            Username:
                        </label>
                    </div>
                    <div className="relative mx-0 my-[30px] border-b-2 border-b-[#adadad] border-solid ">
                        <input
                            type="password"
                            id="password"
                            className="w-full h-10 text-base px-[5px] py-0 border-[none] outline-none peer"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <span className="login-custom-span before:bg-blue-600 peer-valid:before:w-full peer-focus:before:w-full"></span>
                        <label
                            htmlFor="password"
                            className="absolute text-[#adadad] -translate-y-1/2 text-base peer-focus:top-[-5px] peer-focus:text-blue-600 peer-valid:top-[-5px] peer-valid:text-blue-600 pointer-events-none duration-500 left-[5px] top-1/2"
                        >
                            Password:
                        </label>
                    </div>
                    <div className="flex items-end mt-[-5px] mb-5 mx-0 text-blue-600 text-base opacity-70">
                        <input
                            type="checkbox"
                            id="persist"
                            className="h-5 w-5 ml-0.5 mr-[5px] mt-0 mb-0.5 hover:cursor-pointer"
                            onChange={togglePersist}
                            checked={persist}
                        />
                        <label htmlFor="persist" className="m-0">
                            Trust This Device
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-[50px] mb-5 border text-lg bg-blue-600 text-[#e9f4fb] font-bold cursor-pointer rounded-full border-solid outline-none hover:border-blue-700 hover:duration-500"
                    >
                        Sign In
                    </button>
                </form>
                <div
                    ref={errRef}
                    className={`absolute inset-x-0 top-0 ${errMsg ? 'visible' : 'invisible'} text-center`}
                >
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Informational message</div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>{errMsg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
