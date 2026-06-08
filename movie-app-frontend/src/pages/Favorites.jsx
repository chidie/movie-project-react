import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites-container">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            </div>
        );
    }
    return (
        <div className="favorites-empty">
        <h2>No Favorites Movies Yet</h2>
        <p>This is where your favorite movies will be displayed.</p>
        </div>
    );
}

export default Favorites;