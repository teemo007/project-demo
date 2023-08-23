import axios from "axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
             await axios.get(`http://${process.env.REACT_APP_HOST}${process.env.REACT_APP_LOGOUT}`, {
                withCredentials: true
            });
            //console.log(response)
        } catch (err) {
            console.error(err);
        }
    }
    //console.log(auth)
    return logout;
}

export default useLogout