import React, { useEffect, useState, useRef } from 'react'
import { ResultCard } from './ResultCard'
import { NavLink } from 'react-router-dom'

import './SearchMovie.css'

const SearchMovie = () => {
    const inputref = useRef('')
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const inputHandler = async (e) => {
        e.preventDefault()
        setQuery(inputref.current.value)
    }

    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch(`http://localhost:8000/search/movie?search=${query}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            const data = await response.json()
            setResults(data.results)
        }
        fetchdata()
    }, [query])

    return (
        <section className='search-section'>
            <div className='add-content'>
                <input type='text'
                    placeholder='Search your favourite movies'
                    ref={inputref}
                    onChange={inputHandler}>
                </input>
            </div>

            <div className='links'>
                <div className='link'><NavLink to="/search/movies">MOVIES</NavLink></div>
                <div className='link'><NavLink to="/search/tvshows">SERIES</NavLink></div>
            </div>

            {results !== undefined && results.length > 0 && (<ul className="results">
                {results.map((movie) => (
                    <li key={movie.id}>
                        <ResultCard movie={movie} />
                    </li>
                ))}
            </ul>
            )}

        </section >
    )
}

export default SearchMovie
