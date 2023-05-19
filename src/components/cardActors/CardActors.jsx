import "./cardActors.scss";

const CardActors = ({ photo, name }) => {
    return (
        <div className="cardActors">
            <img src={photo} alt="" className="cardActors__img" />
            <div className="cardActors__name">{name}</div>
        </div>
    )
}

export default CardActors