import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('darkmode')) || false);
    
    //windows resize

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist, theme, setTheme, width, height }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext
