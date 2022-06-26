import { useState, useEffect } from 'react';
import axios from './axios';

const useAxios = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data.data);
                setIsError(false);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        getData();
    }, [url]);

    return { isLoading, isError, data };
};

export default useAxios;
