import React, { useEffect, useState } from 'react'
import api from '../Api/apiUrl';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await api.get(url);
                setData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [url])
  return data;
}

export default useFetch;