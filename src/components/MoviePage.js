import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function MoviePage(props) {
  const route_parameters = useParams();
  
  const [movieLink, set_movieLink] = useState(route_parameters.imdb_id);
  const [movieData, setMovieData] = useState()

  async function getMovieData() {
    try {
      //my API key: 72c83878
      const response = await axios.get(
        `https://omdbapi.com/?apikey=72c83878&i=${movieLink}`
      );

      setMovieData(response.data)
      
    }
    catch (error) {
      console.log('error :', error.message)
    }
  }

  useEffect(() => {
    getMovieData();
  }, [route_parameters])

  if(movieData) {
    return (
      <div>
       <h1>{movieData.Title} ({movieData.Released})</h1>
       <img src={movieData.Poster} alt="movie poser" />
       <div>
         <h4>Director</h4>
         <p>{movieData.Director}</p>
       </div>
       <div>
         <h4>Plot</h4>
         <p>{movieData.Plot}</p>
       </div>
      </div>
    )
  } 
  return (
    <div>
      <h3>Please wait a moment...</h3>
    </div>
  )
}