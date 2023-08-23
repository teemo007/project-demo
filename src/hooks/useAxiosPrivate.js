import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import { axiosPrivate } from '../api/axios';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const { auth } = useAuth();

	useEffect(() => {
        // Add a request interceptor
		const requestIntercept = axiosPrivate.interceptors.request.use(
			// Do something before request is sent
			(config) => {
                console.log(config)
				if (!config.headers['Authorization']) {
					config.headers[
						'Authorization'
					] = `Bearer ${auth?.accessToken}`;
				}
                console.log(config)
				return config;
			},
			(error) => Promise.reject(error)
		);
		const responseIntercept = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					prevRequest.headers[
						'Authorization'
					] = `Bearer ${newAccessToken}`;
                    console.log(prevRequest)
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			}
		);
		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept); // clean up interceptor
			axiosPrivate.interceptors.response.eject(responseIntercept);
		};
	}, [auth, refresh]);
	return axiosPrivate;
};

export default useAxiosPrivate;
