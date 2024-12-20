import { Route, Routes } from 'react-router-dom';
import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieDetail } from './components/MovieDetail';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Logout } from './components/Logout';


export const API_BASE_URL = "https://api.themoviedb.org/3/movie"
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const Main = ({movies}) => (
    <div className='movieCards'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )

function App() {
  const [movieList, setMovieList] = useState([])
  const [query, setQuery] = useState('')

  const fetchPopularAPI = async() => {
    try {
      const response = await fetch(`${API_BASE_URL}/popular?api_key=${API_KEY}`)
      const data = await response.json()
    
      setMovieList(data.results)
    }
    catch (error) {
      console.error('failed to fetch Popular data', error)
    }   
  }

  useEffect(()=> {
    fetchPopularAPI()
  },[])

  return (
    <>
      <NavBar query={query} setQuery={setQuery} movieList={movieList} setMovieList={setMovieList} fetchPopularAPI={fetchPopularAPI} />
      <main className='py-[100px]'>
        <Routes>
          <Route path={'/'} element={<Main movies={movieList} query={query} setQuery={setQuery} />} />
          <Route path={'/details/:movieId'}  element={<MovieDetail />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'logout'} element={<Logout />} />
        </Routes>
      </main>
    </>
  )
}

export default App
