import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './swiper.scss';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {


    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const docs = topFilm.docs;


    if (docs) {
        // console.log(docs[0].genres);
        // docs.map((item) => {
        //     console.log(item.genres.map(item => item.name));
        // })
    }
    // consolrrre.log(topFilm);

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
                            // if (item.genres[i]) {
                            //     console.log(item.genres[1]);
                            // }
                            {
                                let test = { ...item.genres }
                                console.log(test[i].name);
                            }
                            return <SwiperSlide key={item.id}>
                                <Card
                                    poster={item.poster.url}
                                    country={item.countries[0].name}
                                    year={item.year}
                                    title={item.name}
                                    imdb={item.rating.imdb}
                                    kp={item.rating.kp}

                                // {...item.genres.name}

                                />
                            </SwiperSlide>
                        }) : null
                    }
                </Swiper>
            </div>

        </>
    );
}