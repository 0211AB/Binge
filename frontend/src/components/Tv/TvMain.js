import React, { useState, useEffect } from 'react'
import './TvMain.css'
import './TvMainRow'
import TvMainRow from './TvMainRow'

export default function TvMain() {

    const [data, setData] = useState({})
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
        }
        fetchdata()
    }, [])


    if (data === {} || data.results === undefined)
        return (
            <h1 className="heading"> <span> Upcoming</span>  Movies </h1>
        )


    return (
        data.results.map((result) => {
            if(result.id===71446)
                return (
                    <section key={result.id} className="about" id="about" >
                        <h1 className="heading">MOST TRENDING TODAY </h1>                
                        <TvMainRow id={result.id} img={result.poster_path} name={result.original_name} overview={result.overview} rating={result.vote_average}></TvMainRow>

                    </section>
                )
        })
    )
}

