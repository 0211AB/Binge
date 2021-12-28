import React, { useState, useEffect } from 'react'

import TvGenres from './TvGenres'
import './TvMain.css'
import TvMainRow from './TvMainRow'


export default function TvMain() {

    const [data, setData] = useState({})
    const [isData, setisData] = useState(false)
    //console.log(data)
    //console.log(data.results)

    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch('http://localhost:8000/tv/popular',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            setData(await response.json())
            setisData(true)
        }
        fetchdata()
    }, [])


    if (!isData)
        return (
            <h1 className="heading"> <span> Trending</span> Shows</h1>
        )

    return (
        <section className="about" id="about" >
            < TvGenres />
            <h1 className="heading">TRENDING TODAY </h1>

            {data.results.map((result) => {
                if (result.id === 71446)
                    return <TvMainRow key={result.id} id={result.id} key={result.id} img={result.poster_path} name={result.original_name} overview={result.overview} rating={result.vote_average} />
            })}

        </section>
    )

}