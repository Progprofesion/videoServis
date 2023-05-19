import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../cardFilm/CardFilm";
import { setGenre } from "../../store/reducer/dataSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './swiper.scss';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App(title, poster, countries, year, filmName, imdb, kp, genres) {

    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const docs = topFilm.docs;

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={80}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
        >
            <div className="swiper__title">{"title"}</div>
            {
                docs ? docs.map((item, i) => {
                    return <SwiperSlide key={item.id}>
                        <Card
                            poster={item.poster.url}
                            country={item.countries[0].name}
                            year={item.year}
                            title={item.name}
                            imdb={item.rating.imdb}
                            kp={item.rating.kp}
                            genres={item.genres.map(genre => genre.name).join(', ')}
                        />
                    </SwiperSlide>
                }) : null
            }
        </Swiper>
    );
}