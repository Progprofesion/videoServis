
import Main from "../main/Main";
import CardList from "../cardList/CardList";
import Swiper from "../swiper/Swiper";
import './app.scss'

const app = () => {
    return (
        <main className='app'>
            <Main />
            {/* <CardList /> */}
            <Swiper />
        </main>
    )
}

export default app