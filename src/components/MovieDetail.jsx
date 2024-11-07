

export const MovieDetail = ({ movie }) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <section className="flex bg-gray-800 text-slate-100 max-w-[1000px] mx-auto my-0">   
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
            <div className="flex flex-col gap-3 py-[50px] px-[30px] max-w-[500px]">
                <div className="flex justify-between">
                    <p className="w-[70%] font-bold text-xl">제목: {movie.title}</p>
                    <p className="w-[30%]"> 평점: {movie.vote_average}</p>
                </div>
                <div>장르: {movie.genres.map((gen) => gen.name).join(', ')}</div>
                <div className="whitespace-pre-wrap">{movie.overview}</div>
            </div>
        </section>
    )
}

console.log(MovieDetail)