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

    // const _transformTopFilm = (data) => {
    //     return {
    //         id: comics.id,
    //         title: comics.title,
    //         description: comics.description || 'There is no description',
    //         pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
    //         thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
    //         language: comics.textObjects.language || 'en-us',
    //         price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
    //     }
    // }

}

export default useGetMainFilm;