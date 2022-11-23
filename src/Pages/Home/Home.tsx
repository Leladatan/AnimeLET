import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../../index.scss'
import {animeData} from "../../Store/storeAnime";
import CardsAnime from "../AnimeList/CardsAnime";

export default function Home() {

    const sortedAnimeRate = animeData.sort(function (a, b) {
        return b.rate - a.rate;
    }).slice(0, 5)

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="main__content_title">
                            <h2>This season's Anime</h2>
                        </div>
                        <div className="main__content_cards">
                            {sortedAnimeRate.map(item => (
                                <CardsAnime item={item} key={item.id}/>
                            ))}
                        </div>
                        <div className="main__content_info">
                            <h3 className="main__content_info_title">Наши преимущества</h3>
                            <p className="main__content_info_text">Мы подготовили для Вас следующие бонусы:</p>
                            <ul className="main__content_info_list">
                                <li className="main__content_info_list_item">Огромный выбор аниме мультики онлайн. У нас
                                    загружены все популярные и качественные аниме прошлых лет, и наша коллекция
                                    регулярно пополняется самыми последними новинками. В каталоге есть как
                                    полнометражные, так и аниме сериалы, а жанровое разнообразие во многом превосходит
                                    другие аналогичные порталы. У нас Вы сможете посмотреть красивые произведения о
                                    любви и дружбе, вере и предательстве, доброте и корысти, и многое другое.
                                </li>
                                <li className="main__content_info_list_item">Превосходное качество. Все файлы
                                    предоставляются в HD-формате, что позволяет смотреть аниме онлайн в хорошем качестве
                                    не только на персональном компьютере, но и на телевизоре. Благодаря грамотному
                                    использованию IT-технологий мы гарантируем Вам комфортный бесперебойный просмотр
                                    любого аниме, максимально имитирующий поход в настоящий кинотеатр. При этом Вы
                                    сможете в любой момент поставить на паузу или перемотать его до нужного момента.
                                </li>
                                <li className="main__content_info_list_item">Удобная навигация. Сайт AnimeLET – это не
                                    просто хранилище аниме онлайн, а структурированная фильмотека, в которой очень легко
                                    ориентироваться. Все файлы отсортированы по жанру, длительности, компании-создателю
                                    и другим параметрам. Вы всегда сможете в считанные минуты найти именно ту ленту,
                                    которую ищете.
                                </li>
                                <li className="main__content_info_list_item">Минимум рекламы. Как и большинство других
                                    сайтов, мы пользуемся рекламой, но в то же время мы позаботились о том, чтобы
                                    рекламные объявления не мешали вашему просмотру. Ненавязчивая и дозированная реклама
                                    – это одно из преимуществ портала AnimeGO, которое уже оценили тысячи зрителей.
                                </li>
                            </ul>
                            <p className="main__content_info_text">А ещё мы рады предложить Вам приятный дизайн сайта,
                                быструю работу всех разделов и удобный доступ с различных устройств. Смотреть аниме
                                онлайн теперь стало ещё приятнее и комфортнее!</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}