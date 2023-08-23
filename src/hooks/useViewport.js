import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const useViewport = () => {
    return useContext(AuthContext);
}

export default useViewport;
