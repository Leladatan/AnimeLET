import React, { FC, useEffect, useState } from 'react';

import { animeData } from '../../assets/store/storeAnime';
import { IAnimeItem } from '../../assets/types/types';

import './AnimeList.scss';

import Search from '../../components/Search/Search';
import GenreSelect from '../../components/GenreSelect/GenreSelect';
import AgeRageSelect from '../../components/AgeRateSelect/AgeRateSelect';
import RateSelect from '../../components/RateSelect/RateSelect';
import Reset from '../../components/Reset/Reset';
import AnimeCard from '../../components/AnimeCard/AnimeCard';

const AnimeListPage: FC = () => {
  const [animeList, setAnimeList] = useState<IAnimeItem[]>([]);

  const [search, setSearch] = useState<string>('');
  const [ageRate, setAgeRate] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [rate, setRate] = useState<string>('');

  useEffect(() => {
    const result = animeData.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        item.age.includes(ageRate) &&
        item.genre.includes(genre)
      );
    });

    if (rate === 'up') {
      result.sort((a, b) => b.rate - a.rate);
    } else if (rate === 'down') {
      result.sort((a, b) => a.rate - b.rate);
    }

    setAnimeList(result);
  }, [search, ageRate, genre, rate]);

  const handleReset = () => {
    setSearch('');
    setAgeRate('');
    setGenre('');
    setRate('');
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__content_title">
            <h2>List of Anime</h2>
          </div>
          <div className="main__content_search">
            <div className="search-menu">
              <GenreSelect genre={genre} setGenre={setGenre} />
              <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
              <Search search={search} setSearch={setSearch} />
            </div>
            <div className="btns">
              <RateSelect rate={rate} setRate={setRate} />
              <Reset reset={handleReset} />
            </div>
          </div>
          <div className="main__content_cards">
            {animeList.map((item) => (
              <AnimeCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimeListPage;
