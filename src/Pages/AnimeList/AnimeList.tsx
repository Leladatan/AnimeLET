import {FC, useEffect, useState} from "react";
import {IAnimeItem} from "../../Interfaces/IAnimeItem";
import {animeData} from "../../Store/storeAnime";
import YearSelect from "../../Components/YearSelect/YearSelect";
import RateSelect from "../../Components/RateSelect/RateSelect";
import AnimeCard from "../../Components/AnimeCard/AnimeCard";
import GenreSelect from "../../Components/GenreSelect/GenreSelect";
import Search from "../../Components/Search/Search";
import AgeRageSelect from "../../Components/AgeRateSelect/AgeRateSelect";
import Reset from "../../Components/Reset/Reset";

const AnimeListPage: FC = () => {
    const [animeList, setAnimeList] = useState<IAnimeItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [ageRate, setAgeRate] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [minYear, setMinYear] = useState<number>(1960);
    const [maxYear, setMaxYear] = useState<number>(2022);

    useEffect(() => {
        const result = animeData.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.age.includes(ageRate) &&
                item.genre.includes(genre) &&
                (item.year >= minYear && item.year <= maxYear)
            );
        });

        if (minYear < 1960) {
            setMinYear(1960)
        }

        if (rate === 'up') {
            result.sort((a, b) => b.rate - a.rate);
        } else if (rate === 'down') {
            result.sort((a, b) => a.rate - b.rate);
        }

        setAnimeList(result);
    }, [search, ageRate, genre, rate, minYear, maxYear]);

    const handleReset = () => {
        setSearch('');
        setAgeRate('');
        setGenre('');
        setRate('');
        setMinYear(1960);
        setMaxYear(2022);
    };
    console.log(animeList)
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="main__content_title">
                        <h2>List of Anime</h2>
                    </div>
                    <div className="main__content_search">
                        <div className="search-menu">
                            <GenreSelect genre={genre} setGenre={setGenre}/>
                            <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate}/>
                            <Search search={search} setSearch={setSearch}/>
                        </div>
                        <div className="btns">
                            <YearSelect minYear={minYear}
                                        maxYear={maxYear}
                                        setMinYear={setMinYear}
                                        setMaxYear={setMaxYear}/>
                            <RateSelect rate={rate} setRate={setRate}/>
                            <Reset reset={handleReset}/>
                        </div>
                    </div>
                    {animeList.length === 0
                        ?
                        <h2 className="main__content__message-search">
                            Nothing was found for your request, please specify the request...
                        </h2>
                        :
                        <div className="main__content_cards">
                            {animeList.map((item) => (
                                <AnimeCard item={item} key={item.id}/>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </main>
    );
};

export default AnimeListPage;