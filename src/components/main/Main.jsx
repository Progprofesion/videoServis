import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import useGetMainFilm from '../../hooks/useGetMainFilm';
import useGetTopFilm from '../../hooks/useGetTopFilms';
import useGetNewFilm from '../../hooks/useGetNewFilms';
import useGetActors from '../../hooks/useGetActors';
import useGetTrailers from "../../hooks/useGetTarilers";
import tv from "../../assets/icon/tv.svg";
import poster from "../../assets/img/poster.png";
import iconSeacrh from "../../assets/icon/iconSearch.svg";

import Button from "../buttons/Button";

import "./main.scss";

const Main = () => {


    const mainFilm = useSelector((state) => state.dataSlice.mainFilm);

    const dispatch = useDispatch();

    useGetMainFilm();
    useGetTopFilm();
    useGetNewFilm();
    useGetActors();
    useGetTrailers();

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
                        <button className="main__navbar_menu">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="main__info">
                    <div className="main__info_title">{mainFilm.name}</div>
                    <div className="main__info_rating">
                        <div className="main__info_imdb">{mainFilm.rating ? mainFilm.rating.imdb : null}</div>
                        <div className="main__info_kp">{mainFilm.rating ? mainFilm.rating.kp : null}</div>
                    </div>
                    <div className="main__info_descr">{mainFilm.description}</div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Main