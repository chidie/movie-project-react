import { useState } from 'react'
import MovieCard from './components/movie-card';
import Home
 from './pages/home';
import './App.css'

function App() {
  const movieNumber = 2;
  return (
    // <>
    //   {movieNumber === 1 ? (
    //     <MovieCard movie={{title: "Reform", release_date: "2025"}}></MovieCard>) : (
    //     <MovieCard movie={{title: "The Last Election", release_date: "2027"}}></MovieCard>)
    //   } // conditional rendering
    //   <MovieCard movie={{title: "The Grand Prison", release_date: "2026"}}></MovieCard>
    //   <MovieCard movie={{title: "Reform", release_date: "2025"}}></MovieCard>
    // </>
    <>
      <Home />
    </>
  );
}

export default App
