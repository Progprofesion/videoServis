import { useSelector } from "react-redux";
import Main from "../main/Main";
import CardList from "../cardList/CardList";
// eslint-disable-next-line
import Swiper from "../swiper/Swiper";
import './app.scss'

const App = () => {
    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const newFilm = useSelector((state) => state.dataSlice.newFilm);
    const trailers = useSelector((state) => state.dataSlice.trailers);
    const actors = useSelector((state) => state.dataSlice.actors);

    return (
        <main className='app'>
            <Main />
            <CardList title="Featured Movie" dataArr={topFilm} visible="films" />
            <CardList title="New Arrival" dataArr={newFilm} visible="films" style={{ marginTop: "0px" }} />
            <CardList title="Featured Casts" dataArr={trailers} visible="trailers" style={{ marginTop: "0px" }} />

            <CardList title="Featured Casts" dataArr={actors} visible="actors" style={{ marginTop: "0px" }} />
        </main>
    )
}

export default App