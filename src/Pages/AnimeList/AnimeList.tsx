import CardsAnime from "./CardsAnime";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../index.scss";
import {animeData} from "../../Store/storeAnime";
import {useState} from "react";

export default function AnimeList() {

    const [nameAnime, setNameAnime] = useState<string>('')
    const [animeAgeRateSelect, setAnimeAgeRateSelect] = useState('')
    const [genreAnime, setGenreAnime] = useState('')

    const filteredNameAnime = animeData.filter(anime => {
        if (anime.age.includes(animeAgeRateSelect) || genreAnime === "choose")
            return anime.title.toLowerCase().includes(nameAnime.toLowerCase())
                && anime.age.includes(animeAgeRateSelect)
                && anime.genre.includes(genreAnime)
    })

    const reset = () => {
        setNameAnime('')
        setAnimeAgeRateSelect('')
        setGenreAnime('')
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
                                <div className="select_anime">
                                    <select name="anime" id="anime-select" value={genreAnime} onChange={(e) => {
                                        setGenreAnime(e.target.value)
                                    }}>
                                        <option value="choose">Please choose a genre</option>
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
                                    </select>
                                </div>
                                <div className="search">
                                    <input type="text" className="search_bar" value={nameAnime}
                                           onChange={(e) => {
                                               setNameAnime(e.target.value)
                                           }} placeholder="Enter anime name..."
                                    />
                                </div>
                                <div className="select_age">
                                    <select name="anime" id="anime-select" value={animeAgeRateSelect}
                                            onChange={(e) => {
                                                setAnimeAgeRateSelect(e.target.value)
                                            }}

                                    >
                                        <option value="choose">Please choose a age-rate</option>
                                        <option value="0+">0+</option>
                                        <option value="14+">14+</option>
                                        <option value="16+">16+</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btns">
                                <div className="reverseList">
                                    <button className="reverse__btn">
                                        Reverse
                                    </button>
                                </div>
                                <div className="reset">
                                    <button className="reset__btn" onClick={reset}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="main__content_cards">
                            {filteredNameAnime.map(item => (
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