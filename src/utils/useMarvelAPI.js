import { useState, useEffect } from 'react';
import marvelAPI from './marvelAPI';
import { toast } from 'react-toastify';

const useMarvelAPI = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await marvelAPI(url);
                setData(response.data.data);
                setIsError(false);
            } catch (error) {
                setIsError(true);
                toast.error(error.response.data?.status || 'Sorry, there was an error');
            }
            setIsLoading(false);
        };
        getData();
    }, [url]);

    return { isLoading, isError, data };
};

export default useMarvelAPI;
