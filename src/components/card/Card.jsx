import { useSelector } from "react-redux";
import useGetTopFilm from '../../hooks/useGetMainFilm';
import "./card.scss";

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
        <div className="card">
            <img src={poster} alt="" className="card__poster" />
            <div className="card__year">{`${country}, ${year}`}</div>
            <div className="card__title">{title}</div>
            <div className="card__rating">
                <div className="card__rating_wrapp">
                    <img src="icon" alt="icon" className="card__rating_icon" />
                    <div className="card__ratingKp">{kp}</div>
                </div>
                <div className="card__rating_wrapp">
                    <img src="icon" alt="icon" className="card__ratingimdb_icon" />
                    <div className="card__ratingKp">{imdb}</div>
                </div>
            </div>
            <div className="card__genres">{genres}</div>
        </div>
    )
}

export default Card