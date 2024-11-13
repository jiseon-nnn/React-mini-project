import { Link } from "react-router-dom"
import { useDebounce } from '../components/useDebounce'
import { useEffect, useState } from "react"
import { API_KEY } from "../App"
import { Logout } from "./Logout"
import { useUser } from "./useUser"


export const NavBar = ({query, setQuery, setMovieList, fetchPopularAPI }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const debouncedQuery = useDebounce(query, 1000)
    const loginUser = useUser()

    const handleSearchData = (e) => {
        setQuery(e.target.value)
    }

    // search API fetch
    const fetchMovies = async (searchQeury) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQeury}&include_adult=false`
            )
            const data = await response.json()
            setMovieList(data.results)
        }
        catch (error) {
            console.error('failed to fetch Search Movie:', error)
        }
    }

    useEffect(() => {
        if (debouncedQuery) {
            fetchMovies(debouncedQuery);
        } else {
            fetchPopularAPI()
        }
    }, [debouncedQuery])

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const renderMenu = () => {
        return (
            <div className="renderMenu">
                <ul>
                    <li>
                        <span>즐겨찾기</span>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>

        )
    }

    return(
        <nav>
            <Link className='grow-[1] flex items-center' to={'/'}>
                <img src='/assets/doong.png' alt="logo" className="doong" />
                <span className="title">DOONG MOVIE</span>
            </Link>
                <div>
                <input type="text" placeholder="제목을 검색하세요"
                className="text-[black] py-[4px] px-[8px] mr-2" 
                onChange={handleSearchData}
                value={query}
                />
                
                <button className="searchBtn">
                    검색</button>
            </div>
            <div className="nav_hidden">
                {!loginUser? (
                    <>
                        <Link to={'/signup'}>
                            <span>회원가입 </span>
                        </Link>
                        <Link to={'/login'}>
                            <span> 로그인</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <button className="userBtn"
                        onClick={handleToggleMenu}>👤</button>
                        {isMenuOpen && renderMenu()}
                    </>
                )}
            </div>
            <div>
                <input className="hamburger" type="button" value="&#9776;"
                />
            </div>
        </nav>
    )
}