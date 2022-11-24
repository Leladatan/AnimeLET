import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {animeData} from "../../Store/storeAnime";
import {useLocation} from "react-router-dom";


export default function AnimePage() {

    const url = useLocation()
    const urlId = Number(url.pathname.slice(11))
    const itemAnime = animeData[urlId - 1]

    const genres = itemAnime.genre.slice(1).join(", ")

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="anime-page">
                            <div className="anime-page__banner">
                                <img className="animePage-img" src={itemAnime.img} alt="banner"/>
                            </div>
                            <div className="anime-page__description">
                                <h2 className="animePage-title">{itemAnime.title}</h2>
                                <div className="anime-page__rate">
                                    <svg className="anime-page__rate-star" width="15" height="15" viewBox="0 0 15 15"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.4713 15L4.47223 8.98092L0 5.46228H5.64194L7.45777 0L9.15645 5.46228H15L10.275 9.05924L12.1225 15L7.37643 11.2659L2.4713 15Z"
                                            fill="#9370DB"/>
                                    </svg>
                                    <span className="anime-page__rate-text">{itemAnime.rate.toFixed(1)}</span>
                                </div>
                                <div className="anime-page__year">
                                    <h3 className="anime-page__year-title">Year</h3>
                                    <p className="anime-page__year-text">{itemAnime.year}</p>
                                </div>
                                <div className="anime-page__genres">
                                    <h3 className="anime-page__genres-title">Genres</h3>
                                    <p className="anime-page__genres-text">{genres}</p>
                                </div>
                                <div className="anime-page__age">
                                    <h3 className="anime-page__age-title">Age-rate</h3>
                                    <p className="anime-page__age-text">{itemAnime.age}</p>
                                </div>
                                <div className="anime-page__description">
                                    <h3 className="anime-page__description-title">Description</h3>
                                    <p className="anime-page__description-text">{itemAnime.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="anime-page__video">
                            <h2 className="anime-page__video_title">Opening</h2>
                            <iframe className="anime-page__video_video" src={itemAnime.linkVideo}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}