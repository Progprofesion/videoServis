import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTrailers } from '../store/reducer/dataSlice';
import axios from "axios";

const useGetTrailers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1.3/movie?selectFields=videos%20id&page=1&limit=2&videos.trailers.type=TRAILER", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                dispatch(setTrailers(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

}

export default useGetTrailers