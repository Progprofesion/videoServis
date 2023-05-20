import { useSelector } from "react-redux";
import Main from "../main/Main";
import CardList from "../cardList/CardList";
// eslint-disable-next-line
import Swiper from "../swiper/Swiper";
import './app.scss'

const App = () => {
    const topFilm = useSelector((state) => state.dataSlice.topFilm);
    const newFilm = useSelector((state) => state.dataSlice.newFilm);
    const actors = useSelector((state) => state.dataSlice.actors);
    // console.log(actors.docs[0]);
    return (
        <main className='app'>
            <Main />
            <CardList title="Featured Movie" dataArr={topFilm} />
            <CardList title="New Arrival" dataArr={newFilm} style={{ marginTop: "0px" }} />
            <CardList title="Featured Casts" dataArr={actors} visible={true} style={{ marginTop: "0px" }} />
        </main>
    )
}

export default App