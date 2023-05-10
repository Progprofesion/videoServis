import { useCallback, useState, useEffect, memo } from "react";
import axios from 'axios';
import tv from "../../assets/icon/tv.svg";
import poster from "../../assets/img/poster.png";
import iconSeacrh from "../../assets/icon/iconSearch.svg";
import { useHttp } from '../../hooks/http.hook';

import useMarvelService from "../../services/KinopoiskServices";

import "./main.scss";

const Main = () => {

    const [data, setData] = useState("");

    const { request, clearError, process, setProcess } = useHttp();


    const getMainFilm = async () => {
        const res = await request("https://api.kinopoisk.dev/v1.3/movie/1009536");
        setData(res);
    }

    useEffect(() => {
        getMainFilm();
    }, [])



    return (
        <div className="main">
            <div className="main__poster"></div>
            <img src={poster} alt="" className="main__poster" />
            <div className="container">
                <div className="main__navbar">
                    <div className="main__navbar_logo">
                        <img src={tv} alt="" className="main__navbar_img" />
                        <div className="main__navbar_title">MovieBox</div>
                    </div>
                    <div className="main__navbar_searchWrapp">
                        <input type="text" placeholder="What do you want to watch?" className="main__navbar_search" />
                        <img src={iconSeacrh} alt="iconSeacrh" className="main__navbar_iconSearch" />
                    </div>
                    <div className="main__navbar_menuWrapp">
                        <div className="main__navbar_signIn">Sign in</div>
                        <div className="main__navbar_menu">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="main__info">
                    <div className="main__info_title">John Wick 3 : Parabellum</div>
                    <div className="main__info_rating">
                        <div className="main__info_imdb">{data.rating ? data.rating.imdb : null}</div>
                        <div className="main__info_kp">{data.rating ? data.rating.kp : null}</div>
                    </div>
                    <div className="main__info_descr">{data.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Main