import React, { useEffect, useState } from 'react'
import './Trending.css'
import Box from './Box'

export default function Trending() {
    const [data, setData] = useState({})
    //console.log(data)
    console.log(data.results)

    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch('http://localhost:8000/movie/upcoming',
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





    if (data === {} || data.results === undefined)
        return (
            <h1 className="heading"> <span> Upcoming</span>  Movies </h1>
        )

    return (
        <section className="gallery" id="gallery">

            <h1 className="heading"> <span>UPCOMING &nbsp;</span>Indian  Movies </h1>

            <div className="box-container">
                {data.results.map((result)=>{
                   // console.log(encodeURI(result.backdrop_path))
                   return  <Box key={result.id} img={result.poster_path} title={result.title} description={result.overview||result.original_title} date={result.release_date}></Box>
                })}

            </div>
        </section>
    )
}
