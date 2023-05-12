import { useState, useEffect } from "react";
import axios from "axios";
import tv from "../../assets/icon/tv.svg";
import poster from "../../assets/img/poster.png";
import iconSeacrh from "../../assets/icon/iconSearch.svg";

import Button from "../buttons/Button";

import "./main.scss";

const Main = () => {

    const [data, setData] = useState("");

    const getMainFilm = async () => {

        axios.get("https://api.kinopoisk.dev/v1.3/movie/1009536", {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': `${process.env.REACT_APP_KINOPOISK_KEY}`
            }
        })
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    useEffect(() => {
        getMainFilm();
    }, [])

    // console.log(data.data.name);
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
                    <div className="main__info_title">{data.name}</div>
                    <div className="main__info_rating">
                        <div className="main__info_imdb">{data.rating ? data.rating.imdb : null}</div>
                        <div className="main__info_kp">{data.rating ? data.rating.kp : null}</div>
                    </div>
                    <div className="main__info_descr">{data.description}</div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Main