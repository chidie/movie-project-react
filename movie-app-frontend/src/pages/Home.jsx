import MovieCard from "../components/movie-card";
import { useState } from 'react'
import '../css/Home.css'

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1990"},
        {id: 3, title: "The Matrix", release_date: "1995"},
    ]

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchTerm);
        setSearchTerm('');
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
            <div className="movies-grid">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home