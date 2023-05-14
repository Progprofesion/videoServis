import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTopFilm } from '../store/reducer/dataSlice';
import axios from "axios";

const useGetTopFilm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1.3/movie?sortField=2022&sortType=-1&page=1&limit=4", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                dispatch(setTopFilm(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

}

export default useGetTopFilm