import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { setGenre } from "../../store/reducer/dataSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './swiper.scss';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {

    const dispatch = useDispatch();
    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const genre = useSelector((state) => state.dataSlice.genre);
    const docs = topFilm.docs;

    useEffect(() => {
        if (docs) {
            // console.log(docs[0].genres);
            docs.map((item, i) => {
                // item.genres.map((genre, i) => {
                //     dispatch(setGenre(genre))
                // });
                console.log(item);
                // for (let i = 0; i < 4; i++) {
                //     if (item.genres[i]) {
                //         // console.log(item.genres.name);
                //     }
                // }


            })
            // console.log(genre);
        }
    }, [topFilm])


    // console.log(genre);

    return (
        <>
            <div className="swiper__title"> Featured Movie
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
            </div>

        </>
    );
}