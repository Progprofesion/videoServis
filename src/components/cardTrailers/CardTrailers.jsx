import "./cardTrailers.scss";
const CardTrailers = ({ img, name }) => {
    return (
        <div className="cardTrailers">
            <img src={img} alt="" className="cardTrailers__img" />
            <div className="cardTrailer__name">{name}</div>
        </div>
    )
}

export default CardTrailers