import iconPlayButton from "../../assets/icon/iconPlayButton.svg";
import "./button.scss";

const Button = () => {
    return (
        <button className="button">
            <div className="button__descr">
                <img src={iconPlayButton} alt="icon play button" className="button__icon" />
                <div className="button__title">WATCH TRAILER</div>
            </div>
        </button>
    )
}

export default Button