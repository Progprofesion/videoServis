import { Swiper, SwiperSlide } from "swiper/react";
import CardFilm from "../cardFilm/CardFilm";
import CardActors from "../cardActors/CardActors";
import CardTrailers from "../cardTrailers/CardTrailers";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardList = ({ dataArr, title, style, visible }) => {

    const docs = dataArr.docs;

    const itemList = docs ? docs.map((item) => {
        switch (visible) {
            case "films":
                return <SwiperSlide key={item.id}>
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
            case "trailers":
                // console.log(item.videos.trailers[0].url);
                item.videos.trailers.map((item) => {
                    console.log(item.url);
                })
                return <SwiperSlide key={item.id}>
                    <CardTrailers
                        img={item.videos.trailers.map(item => item.url)}
                        name={item.name}
                    />
                </SwiperSlide>
            case "actors":
                return <SwiperSlide key={item.id}>
                    <CardActors
                        photo={item.photo}
                        name={item.enName}
                    />
                </SwiperSlide>
        }
    }) : null;

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
            {itemList}
        </Swiper>
    )
}

export default CardList