import { useNavigate } from "react-router-dom";
import { IMG_BASE_URL } from "../App";

export const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    return (
            <section
            className="movieCard"
            onClick={()=> navigate(`/details/${movie.id}`)}>
                <img 
                className="w-[100%] h-[250px]"
                src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                <div className="flex flex-col p-[10px]">
                    <p className="text-[14px]">{movie.title}</p>
                    <p className="text-[12px] text-[gray]">평점: {movie.vote_average}</p>
                </div>
            </section>
        )
}