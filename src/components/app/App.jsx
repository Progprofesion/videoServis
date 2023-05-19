import { useSelector } from "react-redux";
import Main from "../main/Main";
import CardListFilm from "../cardListFilm/CardListFilm";
import CardListActors from "../cardListActors/CardListActors";
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
            <CardListFilm title="Featured Movie" dataArr={topFilm} />
            <CardListFilm title="New Arrival" dataArr={newFilm} style={{ marginTop: "0px" }} />
            <CardListFilm title="Featured Casts" dataArr={actors} visible={true} style={{ marginTop: "0px" }} />
        </main>
    )
}

export default App