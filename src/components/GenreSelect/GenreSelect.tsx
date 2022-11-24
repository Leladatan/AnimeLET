import React, { FC } from 'react';

interface Props {
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}

const GenreSelect: FC<Props> = ({ genre, setGenre }) => {
  return (
    <div className="select_genre">
      <select
        name="anime"
        id="anime-select"
        value={genre}
        onChange={(event) => {
          setGenre(event.target.value);
        }}
      >
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
  );
};

export default GenreSelect;
