import './ResultCard.css'

export const ResultCard = ({ movie }) => {
    var title
    if (movie.title)
        title = movie.title.length > 18 ? movie.title.substring(0, 13) + '..' : movie.title
    else
        title = movie.name.length > 18 ? movie.name.substring(0, 13) + '..' : movie.name

    //console.log(title)

    return (

        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster" />
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{title}</h3>
                    {movie.release_date && <h4 className="release-date">{movie.release_date}</h4>}
                </div>

                <div className="controls">
                    <button>Add to Watchlist</button>
                    <button> Add to Watched </button>
                </div>
            </div>
        </div>
    );
};