import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate()

    return (
        <section
        className="h-[320px] w-[180px] border-[1px] border-gray-200"
        onClick={()=> navigate(`/details`)}>
            <img 
            className="w-[180px] h-[250px]"
            src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
            <div className="p-[10px]">
                <p className="text-[14px]">{movie.title}</p>
                <p className="text-[12px] text-[gray]">평점: {movie.vote_average}</p>
            </div>
        </section>
    )
}
