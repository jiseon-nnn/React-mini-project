import { useParams } from "react-router-dom";
import { API_BASE_URL, API_KEY, IMG_BASE_URL } from "../App";
import { useEffect, useState } from "react";


export const MovieDetail = () => {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()

    useEffect(()=> {
        const fetchDetailAPI = async () => {
            try {
                const response = await fetch (`${API_BASE_URL}/${movieId}?api_key=${API_KEY}`)
                const data = await response.json()

                setMovie(data)
            }
            catch (error) {
                console.error('failed to fetch Movie detail', error)
            }
        }

        fetchDetailAPI()
    },[movieId])
    
    if(!movie) {
        return <p className="text-center text-[2rem]">loading..</p>
    }

    
    return (
        <section className="detailSection">   
            <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
            <div className="detailText">
                <div className="flex justify-between items-center">
                    <p className="w-[70%] font-bold text-[25px]">{movie.title}</p>
                    <p className="w-[30%]"> 평점: {movie.vote_average}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <span>장르: </span>
                    {movie.genres.map((gen) => (
                        <p key={gen.id}
                        className="bg-gray-100 text-[black] px-2 rounded-md">{gen.name}
                        </p>
                    ))}
                </div>
                <hr />
                <div className="whitespace-pre-wrap">{movie.overview}</div>
            </div>
        </section>
    )
}
