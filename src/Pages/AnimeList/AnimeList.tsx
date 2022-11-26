import CardsAnime from "./CardsAnime";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../index.scss";
import {animeData} from "../../Store/storeAnime";
import {useState} from "react";

export default function AnimeList() {
    const [nameAnime, setNameAnime] = useState<string>('')
    const [animeAgeRateSelect, setAnimeAgeRateSelect] = useState<string>('')
    const [genreAnime, setGenreAnime] = useState<string>('')
    const [rateStarAnime, setRateStarAnime] = useState<string>('')
    const [minYear, setMinYear] = useState<number>(1990)
    const [maxYear, setMaxYear] = useState<number>(2022)

    let filteredNameAnime = animeData.filter(anime => {
        if (anime.age.includes(animeAgeRateSelect) && genreAnime === "" && rateStarAnime === ""
            || anime.genre.includes(genreAnime) && animeAgeRateSelect === "" && rateStarAnime === "") {
            animeData.sort((a, b) => a.id - b.id)
        }
        return anime.title.toLowerCase().includes(nameAnime.toLowerCase())
            && anime.age.includes(animeAgeRateSelect)
            && anime.genre.includes(genreAnime)
            && (anime.year >= minYear && anime.year <= maxYear)
    })

    {
        minYear > maxYear ? setMinYear(prev => prev - 1) : null
    }

    if (rateStarAnime === "up") {
        filteredNameAnime = filteredNameAnime.sort((a, b) => b.rate - a.rate)
    } else if (rateStarAnime === "down") {
        filteredNameAnime = filteredNameAnime.sort((a, b) => a.rate - b.rate)
    }

    const reset = () => {
        setNameAnime('')
        setAnimeAgeRateSelect('')
        setGenreAnime('')
        setRateStarAnime('')
        setMinYear(1990)
        setMaxYear(2022)
    }

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="main__content_title">
                            <h2>List of Anime</h2>
                        </div>
                        <div className="main__content_search">
                            <div className="search-menu">
                                <div className="select_genre">
                                    <select name="anime" id="anime-select" value={genreAnime} onChange={(e) => {
                                        setGenreAnime(e.target.value)
                                    }}>
                                        <option value="">Genre</option>
                                        <option value="Demons">Demons</option>
                                        <option value="Adventures">Adventures</option>
                                        <option value="Furs">Furs</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Detective">Detective</option>
                                        <option value="Slice of life">Slice of life</option>
                                        <option value="Supernatural">Supernatural</option>
                                        <option value="Senen">Senen</option>
                                        <option value="Action">Action</option>
                                        <option value="Sport">Sport</option>
                                        <option value="Harem">Harem</option>
                                        <option value="Romance">Romance</option>
                                        <option value="School">School</option>
                                        <option value="Etty">Etty</option>
                                        <option value="Psychological">Psychological</option>
                                        <option value="Thriller">Thriller</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Horrors">Horrors</option>
                                        <option value="Magic">Magic</option>
                                        <option value="Seinen">Seinen</option>
                                        <option value="Madness">Madness</option>
                                        <option value="Music">Music</option>
                                        <option value="Superpower">Superpower</option>
                                        <option value="Military">Military</option>
                                        <option value="Historical">Historical</option>
                                        <option value="Martial arts">Martial arts</option>
                                    </select>
                                </div>
                                <div className="select_age">
                                    <select name="anime" id="anime-select" value={animeAgeRateSelect}
                                            onChange={(e) => {
                                                setAnimeAgeRateSelect(e.target.value)
                                            }}>
                                        <option value="">Age-rate</option>
                                        <option value="0+">0+</option>
                                        <option value="14+">14+</option>
                                        <option value="16+">16+</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                                <div className="search">
                                    <input type="text" className="search_bar" value={nameAnime}
                                           onChange={(e) => {
                                               setNameAnime(e.target.value)
                                           }} placeholder="Enter anime name..."
                                    />
                                </div>
                            </div>
                            <div className="btns">
                                <div className="select_year__inputs">
                                    <div className="min">
                                        <label className="select_year__inputs__text" htmlFor="minYear">{minYear}</label>
                                        <input className="min-input" type="range" id="minYear" name="minYear"
                                               min="1960" max="2022" step="1"
                                               value={minYear} onChange={(e) => {
                                            setMinYear(Number(e.target.value))
                                        }}
                                        />
                                    </div>

                                    <div className="max">
                                        <label className="select_year__inputs__text" htmlFor="maxYear">{maxYear}</label>
                                        <input className="max-input" type="range" id="maxYear" name="maxYear"
                                               min="1991" max="2022" step="1"
                                               value={maxYear} onChange={(e) => {
                                            setMaxYear(Number(e.target.value))
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="select_rate-star">
                                    <select name="anime" id="anime-select" value={rateStarAnime}
                                            onChange={(e) => {
                                                setRateStarAnime(e.target.value)
                                            }}>
                                        <option value="">Rate-star</option>
                                        <option value="up">Ascending order</option>
                                        <option value="down">Descending order</option>
                                    </select>
                                </div>
                                <div className="reset">
                                    <button className="reset__btn" onClick={reset}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="main__content_cards">
                            {filteredNameAnime.map((item) => (
                                <CardsAnime item={item} key={item.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}