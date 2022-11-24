import React, { FC } from 'react';

import './Search.scss';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search_bar"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Enter anime name..."
      />
    </div>
  );
};

export default Search;
