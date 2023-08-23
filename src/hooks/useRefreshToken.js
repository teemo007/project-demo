import useAuth from './useAuth';
import axios from 'axios';

const useRefreshToken = () => {
	const { setAuth } = useAuth();
	/* const instance = axios.create({
        withCredentials: true
    }); */
    //axios.defaults.withCredentials = true

	const refresh = async () => {
		const response = await axios.get(
			`http://${process.env.REACT_APP_HOST}${process.env.REACT_APP_TOKENREFRESH}`,
			{
				withCredentials: true,
			},
            
		);
        
		setAuth((prev) => {
			//console.log(JSON.stringify(prev));
			//console.log(response.data.accessToken);
			return {
				...prev,

				accessToken: response.data.accessToken,
			};
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default useRefreshToken;
