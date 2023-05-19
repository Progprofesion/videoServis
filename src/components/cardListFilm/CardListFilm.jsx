import { Swiper, SwiperSlide } from "swiper/react";
import CardFilm from "../cardFilm/CardFilm";
import CardActors from "../cardActors/CardActors";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardList = ({ dataArr, title, style, visible }) => {
    const docs = dataArr.docs;
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
            style={style}
        >
            <div className="swiper__title">{title}</div>
            {
                docs ? docs.map((item, i) => {
                    return visible ? <SwiperSlide key={item.id}>
                        <CardActors
                            photo={item.photo}
                            name={item.enName}
                        />
                    </SwiperSlide> :
                        <SwiperSlide key={item.id}>
                            <CardFilm
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
    )
}

export default CardList