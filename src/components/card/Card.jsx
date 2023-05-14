import { useSelector } from "react-redux";
import useGetTopFilm from '../../hooks/useGetMainFilm';
import "./card.scss";

const Card = () => {
    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const object = topFilm
    const docs = topFilm.docs;
    if (docs) {
        docs.map((item) => {
            console.log(item.alternativeName);
        })
    }

    // console.log(docs);

    useGetTopFilm();

    return (
        <div className="card">
            <img src="" alt="" className="card__poster" />
            <div className="card__year"></div>
            <div className="card__rating">
                <div className="card__rating_imdb">{ }</div>
                <div className="card__rating_kp">{ }</div>
            </div>
            <div className="card__genre"></div>
        </div>
    )
}

export default Card