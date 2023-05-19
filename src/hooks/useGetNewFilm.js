import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewFilm } from '../store/reducer/dataSlice';
import axios from "axios";

const useGetNewFilm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1.3/movie?page=2&limit=4&year=2023&poster.url=%21null", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                dispatch(setNewFilm(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

}

export default useGetNewFilm