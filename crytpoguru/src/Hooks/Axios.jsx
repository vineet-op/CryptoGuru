import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


const Axios = (param) => {

    const [response, setresponse] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");


    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    const fetchData = async (param) => {
        try {
            setloading(true);
            const result = await axios(param);
            setresponse(result.data);
        } catch (error) {
            seterror(error);
        }
        finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [])

    return {
        response, loading, error
    }



}

export default Axios
