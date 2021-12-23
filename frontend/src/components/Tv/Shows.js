import React, { useState, useEffect } from 'react'

import './Shows.css'
import ShowsBox from './ShowsBox'

export default function Shows() {

    const [data, setData] = useState({})
    //console.log(data)
    //console.log(data.results)

    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch('http://localhost:8000/tv/on_air',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            setData(await response.json())
        }
        fetchdata()
    }, [])

    const pages = data.total_pages
    //console.log(pages)


    if (data === {} || data.results === undefined)
        return (
            <h1 className="heading"> <span> Upcoming</span>  Movies </h1>
        )

    return (
        <section className="movies" id="movies">

            <h1 className="heading"> <span>popular</span> Shows </h1>
            <div className="box-container">

                {data.results.map((result) => {
                    return <ShowsBox key={result.id} id={result.id} title={result.name} overview={result.overview} img={result.poster_path} />
                })}
            </div>

        </section>
    )
}
