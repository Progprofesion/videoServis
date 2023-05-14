import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMainfilm } from '../store/reducer/dataSlice';
import axios from "axios";

const useGetMainFilm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1.3/movie/1009536", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                dispatch(setMainfilm(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

}

export default useGetMainFilm;