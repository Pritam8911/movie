//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './index.css';
//import MovieList from './MovieList';




const API_URL= "http://www.omdbapi.com/?i=tt3896198&apikey=4bde024b"
/*const movie1={
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}*/

const App =() => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState()
  const searchMovies = async(title) =>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search)
 }
  useEffect(()=>{
    searchMovies()

  },[])
 
  return (
    <div className="app">
      <h2> Ola</h2>
      <div className='search'>
        <input type="text"
        placeholder='Search by name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => searchMovies(search)}
        />
       
      </div>
      {
        movies?.length > 0 ?

          (<div className="container">
          
           {movies.map((movie)=>(
            //<MovieList movie={movie}/>
            <div className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
  
            <div>
              <img 
              src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placeholder.com/400'}
              alt={movie.Title} 
              />
            </div>
  
            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
  
      </div>
           ))}
           
          </div>) :

        (
          <div className="empty">
            <h2>404, No Movies</h2>
          </div>
        )
      }
      
      
    </div>
  );
}

export default App;
