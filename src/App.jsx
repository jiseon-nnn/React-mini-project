import { Route, Routes } from 'react-router-dom';
import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieDetail } from './components/MovieDetail';
import movieList from './json/movieListData.json';
import movieDetail from './json/movieDetailData.json'

const Main = () => (
    <div className='flex flex-wrap gap-[10px] justify-center'>
      {movieList.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/details'} element={<MovieDetail movie={movieDetail} />} />
      </Routes>
    </>
  )
}

export default App
