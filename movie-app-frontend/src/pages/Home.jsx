import MovieCard from '../components/MovieCard';
import { useState, useEffect} from 'react';
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch movies. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return
        if (loading) return

        setLoading(true);
        
        try {
            const searchResults = await searchMovies(searchTerm);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.error(err);
            setError('Failed to search movies. Please try again later.');
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies" 
                    className="search-input" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {loading ? (
                <p>Loading movies...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            )}
        </div>
    );
}

export default Home