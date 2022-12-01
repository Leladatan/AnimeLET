import {animeData} from "../../Store/storeAnime";
import {useLocation} from "react-router-dom";
import React, {FC, useEffect, useState} from "react";
import {IAnimeItem} from "../../Interfaces/IAnimeItem";

const AnimePage: FC = () => {
    const [item, setItem] = useState<IAnimeItem | null>(null);
    const [genres, setGenres] = useState<string>("");
    const [randIdAnime, setRandIdAnime] = useState<number>(0);

    const url = useLocation();

    useEffect(() => {
        const urlId = Number(url.pathname.slice(11));
        const current = animeData[urlId - 1];
        setItem(current);
        setGenres(current.genre.slice(1).join(', '));
        setTimeout(() => {
            const rand = (arr: IAnimeItem[]) => {
                return Math.floor(Math.random() * arr.length);
            }
            setRandIdAnime(rand(animeData) + 1);
        }, 500)
    }, [randIdAnime]);


    return (
        <>
            {item && (
                <main className="main">
                    <div className="container">
                        <div className="main__content">
                            <div className="anime-page">
                                <div className="anime-page__banner">
                                    <img className="animePage-img" src={item.img} alt="banner"/>
                                </div>
                                <div className="anime-page__description">
                                    <h2 className="animePage-title">{item.title}</h2>
                                    <div className="anime-page__rate">
                                        <svg
                                            className="anime-page__rate-star"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.4713 15L4.47223 8.98092L0 5.46228H5.64194L7.45777 0L9.15645 5.46228H15L10.275 9.05924L12.1225 15L7.37643 11.2659L2.4713 15Z"
                                                fill="#9370DB"
                                            />
                                        </svg>
                                        <span className="anime-page__rate-text">{item.rate.toFixed(1)}</span>
                                    </div>
                                    <div className="anime-page__year">
                                        <h3 className="anime-page__year-title">Year</h3>
                                        <p className="anime-page__year-text">{item.year}</p>
                                    </div>
                                    <div className="anime-page__genres">
                                        <h3 className="anime-page__genres-title">Genres</h3>
                                        <p className="anime-page__genres-text">{genres}</p>
                                    </div>
                                    <div className="anime-page__age">
                                        <h3 className="anime-page__age-title">Age-rate</h3>
                                        <p className="anime-page__age-text">{item.age}</p>
                                    </div>
                                    <div className="anime-page__description">
                                        <h3 className="anime-page__description-title">Description</h3>
                                        <p className="anime-page__description-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="anime-page__video">
                                <h2 className="anime-page__video_title">Opening</h2>
                                <iframe
                                    className="anime-page__video_video"
                                    src={item.linkVideo}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default AnimePage;