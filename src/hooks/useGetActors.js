import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActors } from '../store/reducer/dataSlice';
import axios from "axios";

const useGetActors = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1/person?page=4&limit=4&photo=%21null&age=20-50&countAwards=4-15", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                dispatch(setActors(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

}

export default useGetActors