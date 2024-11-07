import { Route, Routes } from 'react-router-dom';
import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieDetail } from './components/MovieDetail';
import movieListData from './json/movieListData.json';
import movieDetailData from './json/movieDetailData.json'
import { useState } from 'react';

const Main = ({movies}) => (
    <div className='flex flex-wrap gap-[10px] justify-center'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )

function App() {
  const [movieList, setMovieList] = useState(movieListData.results)
  const [movieDetail, setMovieDetail] = useState(movieDetailData)

  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Main movies={movieList} />} />
        <Route path={'/details'} element={<MovieDetail movie={movieDetail} />} />
      </Routes>
    </main>
  )
}

export default App
