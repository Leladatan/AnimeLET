import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../../index.scss'
import {animeData} from "../../Store/storeAnime";
import CardsAnime from "../AnimeList/CardsAnime";

export default function Home() {

    const sortedAnimeRate = [...animeData].sort(function (a, b) {
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
                            <h3 className="main__content_info_title">Our advantages</h3>
                            <p className="main__content_info_text">We have prepared the following bonuses for you:</p>
                            <ul className="main__content_info_list">
                                <li className="main__content_info_list_item">Huge selection of anime cartoons online. We
                                    have
                                    all popular and high-quality anime of past years are loaded, and our collection
                                    updated regularly with the latest news. The catalog contains
                                    full-length and anime series, and the genre diversity in many ways exceeds
                                    other similar portals. Here you can see beautiful works of
                                    love and friendship, faith and betrayal, kindness and self-interest, and much more.
                                </li>
                                <li className="main__content_info_list_item">Excellent quality. All files
                                    are provided in HD format, which allows you to watch anime online in good quality
                                    not only on a personal computer, but also on a TV. Thanks to competent
                                    using IT technologies, we guarantee you a comfortable uninterrupted viewing
                                    any anime that imitates a trip to a real cinema as much as possible. At the same
                                    time, you
                                    you can pause or rewind it at any time to the desired moment.
                                </li>
                                <li className="main__content_info_list_item">Convenient navigation. The AnimeLET website
                                    is not
                                    just a repository of anime online, but a structured film library in which it is very
                                    easy to
                                    navigate. All files are sorted by genre, duration, creator company
                                    and other options. You can always find exactly the tape you need in a matter of
                                    minutes.
                                    you are looking for.
                                </li>
                                <li className="main__content_info_list_item">Minimum advertising. Like most others
                                    sites, we use ads, but at the same time we have taken care to
                                    the ads didn't interfere with your browsing experience. Unobtrusive and dosed
                                    advertising
                                    - this is one of the advantages of the AnimeGO portal, which has already been
                                    appreciated by thousands of viewers.
                                </li>
                            </ul>
                            <p className="main__content_info_text">And we are also glad to offer you a nice website design,
                                fast work of all sections and convenient access from various devices. Watch anime
                                online is now even more pleasant and comfortable!</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}