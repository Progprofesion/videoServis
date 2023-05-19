import { useSelector } from "react-redux";
import useGetTopFilm from '../../hooks/useGetMainFilm';
import "./cardFilm.scss";

const Card = ({ poster, country, year, title, imdb, kp, genres }) => {
    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const docs = topFilm.docs;
    const name = [];
    if (topFilm.docs) {
        topFilm.docs.map((item) => {

            return name.push(item.alternativeName)
        })
    }


    // console.log(docs);

    useGetTopFilm();

    return (
        <div className="cardFilm">
            <img src={poster} alt="" className="cardFilm__poster" />
            <div className="cardFilm__year">{`${country}, ${year}`}</div>
            <div className="cardFilm__title">{title}</div>
            <div className="cardFilm__rating">
                <div className="cardFilm__rating_wrapp">
                    <img src="icon" alt="icon" className="cardFilm__rating_icon" />
                    <div className="cardFilm__ratingKp">{kp}</div>
                </div>
                <div className="cardFilm__rating_wrapp">
                    <img src="icon" alt="icon" className="cardFilm__ratingimdb_icon" />
                    <div className="cardFilm__ratingKp">{imdb}</div>
                </div>
            </div>
            <div className="cardFilm__genres">{genres}</div>
        </div>
    )
}

export default Card