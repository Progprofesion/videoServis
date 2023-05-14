
import Main from "../main/Main";
import CardList from "../cardList/CardList";
import './app.scss'

const app = () => {
    return (
        <main className='app'>
            <Main />
            <CardList />
        </main>
    )
}

export default app