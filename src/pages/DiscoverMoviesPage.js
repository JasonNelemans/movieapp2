import React, { useState } from "react";
import axios from 'axios';
import SearchResult from '../components/SearchResult'


export default function DiscoverMobiesPage() {
  const [searchText, set_searchText] = useState("");

  const [searchState, setSearchState] = useState('idle');

  const [data, setData] = useState([])
  
  const search = async () => {
    try {
      setSearchState('searching...')
      const queryParam = encodeURIComponent(searchText);
      //my API key: 72c83878
      const response = await axios.get(
        `https://omdbapi.com/?apikey=72c83878&s=${queryParam}`
      );
      setSearchState('succes');
      
      
      if(response.data.Search){
        setData(response.data.Search);
      } else {
        setData([])
        setSearchState('unable to find.')
      }
    }
    catch (error) {
      setSearchState('unable to find.')
    }
  };
  
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>search status: {searchState}</p>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className='mb-4 ml-3 mr-3 row'>
        {data.map(result => {
          return (
            <div className='col-lg-4 d-flex align-items-stretch mb-4'>
            <SearchResult 
              title={result.Title}
              year={result.Year}
              src={result.Poster}
              imdb={result.imdbID}
            />
            </div>
          )
        })}
        </div>
    </div>
  );
}